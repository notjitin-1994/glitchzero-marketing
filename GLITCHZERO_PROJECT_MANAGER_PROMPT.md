# GlitchZero Project Manager - Complete Implementation Prompt

## Overview

Build **GlitchZero Hub** - a world-class, agency-focused project management application that combines the speed of Linear, the client-centric features of Teamwork, and the visual appeal of Monday.com. This application will serve as the internal project management system for GlitchZero Labs, managing client projects from lead to invoice.

---

## Brand & Design System

### Visual Identity

Apply the **GlitchZero Design System** from `style.md`:

- **Primary Color (Signal):** `#FF4F00` - CTAs, accents, interactive elements
- **Background (Obsidian):** `#121212` - Primary dark background
- **Surface (Carbon):** `#1C1C1E` - Cards, sidebars, elevated surfaces
- **Text (Platinum):** `#E5E5E7` - Primary text
- **Muted (Tungsten):** `#8E8E93` - Secondary text, borders
- **Success (Terminal):** `#30D158` - Success states, completion indicators

### Typography

- **Headlines:** Manrope ExtraBold, uppercase, letter-spacing: 0.02em
- **Body:** Manrope Regular, line-height: 1.7
- **Code/Technical:** JetBrains Mono

### Animation

- **Signature Easing:** `cubic-bezier(0.22, 1, 0.36, 1)` - Apple-inspired smooth transitions
- **Duration Scale:** Fast (150ms), Normal (300ms), Slow (500ms)
- **Signature Effects:** Glitch text effect on key branding elements, glow pulse on CTAs

---

## Tech Stack

### Core Framework
```
Next.js 15 (App Router)
├── React Server Components for data fetching
├── Server Actions for mutations
├── Route Groups for organization
└── Parallel Routes for modals
```

### Database & ORM
```
Supabase (PostgreSQL)
├── Real-time subscriptions
├── Row-Level Security (RLS)
├── Built-in authentication
└── File storage for attachments

Drizzle ORM
├── Type-safe queries
├── Serverless-optimized
├── Migration management
└── Relational queries
```

### State Management
```
TanStack Query v5
├── Server state management
├── Optimistic updates
├── Cache invalidation
└── Background refetching

Zustand
├── UI state (sidebar, modals)
├── User preferences
└── Local drafts
```

### UI Components
```
shadcn/ui + Radix UI
├── Accessible primitives
├── Customizable components
├── Full source control
└── GlitchZero theme integration

TanStack Table
├── Project/task tables
├── Sorting, filtering
├── Column visibility
└── Row selection

dnd-kit
├── Kanban board drag-drop
├── Task reordering
└── Cross-column movement
```

### Authentication
```
Clerk
├── Organizations (workspaces)
├── Role-based access
├── Invite system
└── SSO support
```

### Real-Time
```
Supabase Realtime
├── Database subscriptions
├── Presence indicators
└── Live cursors (optional)

Server-Sent Events (SSE)
├── Activity feed
├── Notifications
└── Status updates
```

---

## Data Architecture

### Database Schema (Drizzle)

```typescript
// schema/workspaces.ts
export const workspaces = pgTable('workspaces', {
  id: uuid('id').primaryKey().defaultRandom(),
  name: text('name').notNull(),
  slug: text('slug').notNull().unique(),
  logoUrl: text('logo_url'),
  settings: jsonb('settings').default({}),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow(),
});

// schema/users.ts
export const users = pgTable('users', {
  id: uuid('id').primaryKey().defaultRandom(),
  clerkId: text('clerk_id').notNull().unique(),
  email: text('email').notNull(),
  name: text('name'),
  avatarUrl: text('avatar_url'),
  role: text('role', { enum: ['owner', 'admin', 'member', 'viewer'] }).default('member'),
  createdAt: timestamp('created_at').defaultNow(),
});

export const workspaceMembers = pgTable('workspace_members', {
  id: uuid('id').primaryKey().defaultRandom(),
  workspaceId: uuid('workspace_id').references(() => workspaces.id, { onDelete: 'cascade' }),
  userId: uuid('user_id').references(() => users.id, { onDelete: 'cascade' }),
  role: text('role', { enum: ['owner', 'admin', 'manager', 'member', 'viewer'] }).default('member'),
  joinedAt: timestamp('joined_at').defaultNow(),
});

// schema/clients.ts
export const clients = pgTable('clients', {
  id: uuid('id').primaryKey().defaultRandom(),
  workspaceId: uuid('workspace_id').references(() => workspaces.id, { onDelete: 'cascade' }),
  name: text('name').notNull(),
  email: text('email'),
  phone: text('phone'),
  company: text('company'),
  logoUrl: text('logo_url'),
  notes: text('notes'),
  status: text('status', { enum: ['active', 'inactive', 'lead'] }).default('lead'),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow(),
});

export const clientContacts = pgTable('client_contacts', {
  id: uuid('id').primaryKey().defaultRandom(),
  clientId: uuid('client_id').references(() => clients.id, { onDelete: 'cascade' }),
  name: text('name').notNull(),
  email: text('email'),
  phone: text('phone'),
  role: text('role'), // CEO, Project Manager, etc.
  isPrimary: boolean('is_primary').default(false),
});

// schema/projects.ts
export const projects = pgTable('projects', {
  id: uuid('id').primaryKey().defaultRandom(),
  workspaceId: uuid('workspace_id').references(() => workspaces.id, { onDelete: 'cascade' }),
  clientId: uuid('client_id').references(() => clients.id, { onDelete: 'set null' }),
  name: text('name').notNull(),
  description: text('description'),
  status: text('status', {
    enum: ['draft', 'proposal', 'active', 'on_hold', 'completed', 'cancelled']
  }).default('draft'),
  priority: text('priority', { enum: ['low', 'medium', 'high', 'urgent'] }).default('medium'),
  startDate: timestamp('start_date'),
  dueDate: timestamp('due_date'),
  completedAt: timestamp('completed_at'),

  // Billing
  billingType: text('billing_type', { enum: ['hourly', 'fixed', 'retainer'] }).default('hourly'),
  budget: decimal('budget', { precision: 10, scale: 2 }),
  hourlyRate: decimal('hourly_rate', { precision: 10, scale: 2 }),
  currency: text('currency').default('USD'),

  // Metadata
  color: text('color'), // For visual identification
  icon: text('icon'),
  settings: jsonb('settings').default({}),

  createdById: uuid('created_by_id').references(() => users.id),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow(),
});

export const projectMembers = pgTable('project_members', {
  id: uuid('id').primaryKey().defaultRandom(),
  projectId: uuid('project_id').references(() => projects.id, { onDelete: 'cascade' }),
  userId: uuid('user_id').references(() => users.id, { onDelete: 'cascade' }),
  role: text('role', { enum: ['lead', 'member', 'reviewer'] }).default('member'),
  assignedAt: timestamp('assigned_at').defaultNow(),
});

// schema/milestones.ts
export const milestones = pgTable('milestones', {
  id: uuid('id').primaryKey().defaultRandom(),
  projectId: uuid('project_id').references(() => projects.id, { onDelete: 'cascade' }),
  name: text('name').notNull(),
  description: text('description'),
  dueDate: timestamp('due_date'),
  completedAt: timestamp('completed_at'),
  sortOrder: integer('sort_order').default(0),
  createdAt: timestamp('created_at').defaultNow(),
});

// schema/tasks.ts
export const tasks = pgTable('tasks', {
  id: uuid('id').primaryKey().defaultRandom(),
  projectId: uuid('project_id').references(() => projects.id, { onDelete: 'cascade' }),
  milestoneId: uuid('milestone_id').references(() => milestones.id, { onDelete: 'set null' }),
  parentId: uuid('parent_id').references(() => tasks.id, { onDelete: 'cascade' }), // For subtasks

  title: text('title').notNull(),
  description: text('description'),
  status: text('status', {
    enum: ['backlog', 'todo', 'in_progress', 'in_review', 'done', 'cancelled']
  }).default('backlog'),
  priority: text('priority', { enum: ['low', 'medium', 'high', 'urgent'] }).default('medium'),

  assigneeId: uuid('assignee_id').references(() => users.id, { onDelete: 'set null' }),
  reporterId: uuid('reporter_id').references(() => users.id, { onDelete: 'set null' }),

  dueDate: timestamp('due_date'),
  startDate: timestamp('start_date'),
  completedAt: timestamp('completed_at'),

  estimatedHours: decimal('estimated_hours', { precision: 6, scale: 2 }),
  sortOrder: integer('sort_order').default(0),

  // Client visibility
  isClientVisible: boolean('is_client_visible').default(false),

  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow(),
});

export const taskLabels = pgTable('task_labels', {
  id: uuid('id').primaryKey().defaultRandom(),
  taskId: uuid('task_id').references(() => tasks.id, { onDelete: 'cascade' }),
  labelId: uuid('label_id').references(() => labels.id, { onDelete: 'cascade' }),
});

export const labels = pgTable('labels', {
  id: uuid('id').primaryKey().defaultRandom(),
  workspaceId: uuid('workspace_id').references(() => workspaces.id, { onDelete: 'cascade' }),
  name: text('name').notNull(),
  color: text('color').notNull(),
});

// schema/time-entries.ts
export const timeEntries = pgTable('time_entries', {
  id: uuid('id').primaryKey().defaultRandom(),
  taskId: uuid('task_id').references(() => tasks.id, { onDelete: 'cascade' }),
  projectId: uuid('project_id').references(() => projects.id, { onDelete: 'cascade' }),
  userId: uuid('user_id').references(() => users.id, { onDelete: 'cascade' }),

  description: text('description'),
  startTime: timestamp('start_time').notNull(),
  endTime: timestamp('end_time'),
  duration: integer('duration'), // In minutes

  isBillable: boolean('is_billable').default(true),
  hourlyRate: decimal('hourly_rate', { precision: 10, scale: 2 }),

  invoiceId: uuid('invoice_id').references(() => invoices.id, { onDelete: 'set null' }),

  createdAt: timestamp('created_at').defaultNow(),
});

// schema/comments.ts
export const comments = pgTable('comments', {
  id: uuid('id').primaryKey().defaultRandom(),
  taskId: uuid('task_id').references(() => tasks.id, { onDelete: 'cascade' }),
  userId: uuid('user_id').references(() => users.id, { onDelete: 'cascade' }),

  content: text('content').notNull(),
  isInternal: boolean('is_internal').default(true), // false = visible to client

  parentId: uuid('parent_id').references(() => comments.id, { onDelete: 'cascade' }), // For replies

  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow(),
});

// schema/attachments.ts
export const attachments = pgTable('attachments', {
  id: uuid('id').primaryKey().defaultRandom(),
  taskId: uuid('task_id').references(() => tasks.id, { onDelete: 'cascade' }),
  projectId: uuid('project_id').references(() => projects.id, { onDelete: 'cascade' }),
  commentId: uuid('comment_id').references(() => comments.id, { onDelete: 'cascade' }),

  name: text('name').notNull(),
  url: text('url').notNull(),
  type: text('type'), // MIME type
  size: integer('size'), // In bytes

  uploadedById: uuid('uploaded_by_id').references(() => users.id),
  createdAt: timestamp('created_at').defaultNow(),
});

// schema/invoices.ts
export const invoices = pgTable('invoices', {
  id: uuid('id').primaryKey().defaultRandom(),
  workspaceId: uuid('workspace_id').references(() => workspaces.id, { onDelete: 'cascade' }),
  clientId: uuid('client_id').references(() => clients.id, { onDelete: 'cascade' }),
  projectId: uuid('project_id').references(() => projects.id, { onDelete: 'set null' }),

  invoiceNumber: text('invoice_number').notNull(),
  status: text('status', {
    enum: ['draft', 'sent', 'viewed', 'paid', 'overdue', 'cancelled']
  }).default('draft'),

  issueDate: timestamp('issue_date'),
  dueDate: timestamp('due_date'),
  paidAt: timestamp('paid_at'),

  subtotal: decimal('subtotal', { precision: 10, scale: 2 }),
  tax: decimal('tax', { precision: 10, scale: 2 }),
  total: decimal('total', { precision: 10, scale: 2 }),
  currency: text('currency').default('USD'),

  notes: text('notes'),

  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow(),
});

export const invoiceLineItems = pgTable('invoice_line_items', {
  id: uuid('id').primaryKey().defaultRandom(),
  invoiceId: uuid('invoice_id').references(() => invoices.id, { onDelete: 'cascade' }),

  description: text('description').notNull(),
  quantity: decimal('quantity', { precision: 10, scale: 2 }),
  unitPrice: decimal('unit_price', { precision: 10, scale: 2 }),
  amount: decimal('amount', { precision: 10, scale: 2 }),

  sortOrder: integer('sort_order').default(0),
});

// schema/activity.ts
export const activityLog = pgTable('activity_log', {
  id: uuid('id').primaryKey().defaultRandom(),
  workspaceId: uuid('workspace_id').references(() => workspaces.id, { onDelete: 'cascade' }),
  userId: uuid('user_id').references(() => users.id, { onDelete: 'set null' }),

  action: text('action').notNull(), // created, updated, deleted, commented, etc.
  entityType: text('entity_type').notNull(), // project, task, invoice, etc.
  entityId: uuid('entity_id'),

  metadata: jsonb('metadata').default({}), // Old/new values, additional context

  createdAt: timestamp('created_at').defaultNow(),
});
```

### Entity Relationships

```
Workspace
├── Users (many-to-many via workspace_members)
├── Clients (one-to-many)
├── Projects (one-to-many)
├── Labels (one-to-many)
└── Invoices (one-to-many)

Client
├── Contacts (one-to-many)
├── Projects (one-to-many)
└── Invoices (one-to-many)

Project
├── Milestones (one-to-many)
├── Tasks (one-to-many)
├── Time Entries (one-to-many)
├── Attachments (one-to-many)
└── Members (many-to-many via project_members)

Task
├── Subtasks (self-referential one-to-many)
├── Comments (one-to-many)
├── Attachments (one-to-many)
├── Time Entries (one-to-many)
└── Labels (many-to-many via task_labels)
```

---

## Application Structure

```
app/
├── (auth)/
│   ├── sign-in/
│   │   └── [[...sign-in]]/
│   │       └── page.tsx
│   ├── sign-up/
│   │   └── [[...sign-up]]/
│   │       └── page.tsx
│   └── layout.tsx
│
├── (dashboard)/
│   ├── layout.tsx                    # Main app shell with sidebar
│   ├── page.tsx                      # Redirect to default workspace
│   │
│   └── [workspaceSlug]/
│       ├── layout.tsx                # Workspace context provider
│       ├── page.tsx                  # Dashboard overview
│       │
│       ├── projects/
│       │   ├── page.tsx              # Projects list
│       │   ├── new/
│       │   │   └── page.tsx          # New project form
│       │   └── [projectId]/
│       │       ├── layout.tsx        # Project context
│       │       ├── page.tsx          # Project overview
│       │       ├── board/
│       │       │   └── page.tsx      # Kanban board view
│       │       ├── list/
│       │       │   └── page.tsx      # List view
│       │       ├── timeline/
│       │       │   └── page.tsx      # Gantt/timeline view
│       │       ├── files/
│       │       │   └── page.tsx      # Project files
│       │       └── settings/
│       │           └── page.tsx      # Project settings
│       │
│       ├── tasks/
│       │   ├── page.tsx              # All tasks (my tasks view)
│       │   └── [taskId]/
│       │       └── page.tsx          # Task detail (or modal)
│       │
│       ├── clients/
│       │   ├── page.tsx              # Clients list
│       │   ├── new/
│       │   │   └── page.tsx
│       │   └── [clientId]/
│       │       ├── page.tsx          # Client detail
│       │       └── projects/
│       │           └── page.tsx      # Client's projects
│       │
│       ├── time/
│       │   ├── page.tsx              # Time tracking overview
│       │   ├── log/
│       │   │   └── page.tsx          # Time log/entries
│       │   └── reports/
│       │       └── page.tsx          # Time reports
│       │
│       ├── invoices/
│       │   ├── page.tsx              # Invoices list
│       │   ├── new/
│       │   │   └── page.tsx
│       │   └── [invoiceId]/
│       │       ├── page.tsx          # Invoice detail
│       │       └── edit/
│       │           └── page.tsx
│       │
│       ├── team/
│       │   └── page.tsx              # Team members
│       │
│       ├── reports/
│       │   └── page.tsx              # Analytics & reports
│       │
│       └── settings/
│           ├── page.tsx              # General settings
│           ├── billing/
│           │   └── page.tsx
│           └── integrations/
│               └── page.tsx
│
├── (client-portal)/                  # Client-facing portal
│   ├── layout.tsx
│   └── [clientToken]/
│       ├── page.tsx                  # Client dashboard
│       ├── projects/
│       │   └── [projectId]/
│       │       └── page.tsx          # Project view (filtered)
│       └── invoices/
│           └── page.tsx              # Client's invoices
│
├── api/
│   ├── webhooks/
│   │   ├── clerk/
│   │   │   └── route.ts              # Clerk webhook handler
│   │   └── stripe/
│   │       └── route.ts              # Stripe webhook handler
│   ├── events/
│   │   └── route.ts                  # SSE endpoint
│   └── og/
│       └── route.tsx                 # OG image generation
│
└── layout.tsx                        # Root layout
```

---

## Core Features

### 1. Dashboard Overview

**Components:**
- Project status cards (active, at risk, completed)
- Task progress chart
- Team workload heatmap
- Upcoming deadlines widget
- Recent activity feed
- Time tracked this week
- Revenue overview (optional)

**Implementation:**
```tsx
// app/(dashboard)/[workspaceSlug]/page.tsx
export default async function DashboardPage({ params }: { params: { workspaceSlug: string } }) {
  const workspace = await getWorkspace(params.workspaceSlug);
  const stats = await getDashboardStats(workspace.id);

  return (
    <div className="space-y-6">
      <DashboardHeader workspace={workspace} />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard title="Active Projects" value={stats.activeProjects} icon={Folder} />
        <StatCard title="Open Tasks" value={stats.openTasks} icon={CheckSquare} />
        <StatCard title="Hours This Week" value={stats.hoursThisWeek} icon={Clock} />
        <StatCard title="Revenue MTD" value={stats.revenueMTD} icon={DollarSign} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <ProjectsOverview projects={stats.recentProjects} />
        </div>
        <div>
          <ActivityFeed activities={stats.recentActivities} />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <UpcomingDeadlines deadlines={stats.upcomingDeadlines} />
        <TeamWorkload members={stats.teamWorkload} />
      </div>
    </div>
  );
}
```

### 2. Kanban Board

**Features:**
- Drag-and-drop task management
- Column customization
- Quick task creation
- Task card with key info (assignee, due date, priority, labels)
- Real-time updates across users
- Keyboard navigation

**Implementation:**
```tsx
// components/kanban/kanban-board.tsx
'use client';

import {
  DndContext,
  DragOverlay,
  closestCorners,
  useSensor,
  useSensors,
  PointerSensor,
  KeyboardSensor,
} from '@dnd-kit/core';
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { useOptimistic } from 'react';

const COLUMNS = [
  { id: 'backlog', title: 'Backlog' },
  { id: 'todo', title: 'To Do' },
  { id: 'in_progress', title: 'In Progress' },
  { id: 'in_review', title: 'In Review' },
  { id: 'done', title: 'Done' },
];

export function KanbanBoard({ projectId, initialTasks }: KanbanBoardProps) {
  const [tasks, setTasks] = useState(initialTasks);
  const [activeTask, setActiveTask] = useState<Task | null>(null);
  const updateTaskMutation = useUpdateTask();

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: { distance: 8 },
    }),
    useSensor(KeyboardSensor)
  );

  const handleDragStart = (event: DragStartEvent) => {
    const task = tasks.find(t => t.id === event.active.id);
    setActiveTask(task || null);
  };

  const handleDragEnd = async (event: DragEndEvent) => {
    const { active, over } = event;

    if (!over) return;

    const taskId = active.id as string;
    const newStatus = over.id as TaskStatus;

    // Optimistic update
    setTasks(prev =>
      prev.map(t => t.id === taskId ? { ...t, status: newStatus } : t)
    );

    // Server update
    await updateTaskMutation.mutateAsync({
      id: taskId,
      status: newStatus,
    });

    setActiveTask(null);
  };

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCorners}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
    >
      <div className="flex gap-4 overflow-x-auto pb-4">
        {COLUMNS.map(column => (
          <KanbanColumn
            key={column.id}
            column={column}
            tasks={tasks.filter(t => t.status === column.id)}
            projectId={projectId}
          />
        ))}
      </div>

      <DragOverlay>
        {activeTask && <TaskCard task={activeTask} isDragging />}
      </DragOverlay>
    </DndContext>
  );
}
```

### 3. Time Tracking

**Features:**
- Start/stop timer
- Manual time entry
- Billable vs. non-billable
- Weekly timesheet view
- Time reports by project/client/user

**Implementation:**
```tsx
// components/time/time-tracker.tsx
'use client';

import { useState, useEffect } from 'react';
import { Play, Pause, Square } from 'lucide-react';

export function TimeTracker() {
  const [isRunning, setIsRunning] = useState(false);
  const [duration, setDuration] = useState(0);
  const [activeEntry, setActiveEntry] = useState<TimeEntry | null>(null);

  const startTimer = useStartTimer();
  const stopTimer = useStopTimer();

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isRunning) {
      interval = setInterval(() => {
        setDuration(d => d + 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isRunning]);

  const handleStart = async (taskId?: string) => {
    const entry = await startTimer.mutateAsync({ taskId });
    setActiveEntry(entry);
    setIsRunning(true);
    setDuration(0);
  };

  const handleStop = async () => {
    if (!activeEntry) return;

    await stopTimer.mutateAsync({
      id: activeEntry.id,
      endTime: new Date(),
    });

    setIsRunning(false);
    setActiveEntry(null);
  };

  const formatDuration = (seconds: number) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  return (
    <div className="flex items-center gap-4 p-4 bg-carbon rounded-lg border border-border">
      <div className="flex-1">
        <TaskSelector
          value={activeEntry?.taskId}
          onSelect={(taskId) => handleStart(taskId)}
          disabled={isRunning}
        />
      </div>

      <div className="typo-tech text-2xl text-platinum tabular-nums">
        {formatDuration(duration)}
      </div>

      <div className="flex gap-2">
        {isRunning ? (
          <>
            <Button variant="ghost" size="icon" onClick={handleStop}>
              <Square className="w-5 h-5 text-signal" />
            </Button>
          </>
        ) : (
          <Button variant="ghost" size="icon" onClick={() => handleStart()}>
            <Play className="w-5 h-5 text-terminal" />
          </Button>
        )}
      </div>
    </div>
  );
}
```

### 4. Client Portal

**Features:**
- Secure client login (magic link or password)
- Project progress view (filtered for client-visible tasks)
- Document access
- Deliverable approval workflow
- Invoice viewing and payment
- Comment on tasks

**Access Control:**
```typescript
// middleware.ts
export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Client portal routes
  if (pathname.startsWith('/portal')) {
    const clientToken = request.cookies.get('client_token');

    if (!clientToken) {
      return NextResponse.redirect(new URL('/portal/login', request.url));
    }

    // Validate token and check access
    // ...
  }

  return NextResponse.next();
}
```

### 5. Invoicing

**Features:**
- Generate invoices from time entries
- Fixed-fee invoicing
- Custom line items
- PDF export
- Send via email
- Payment tracking
- Stripe integration for online payments

**Implementation:**
```tsx
// server/actions/invoices.ts
'use server';

import { revalidatePath } from 'next/cache';

export async function generateInvoiceFromTime(
  projectId: string,
  dateRange: { start: Date; end: Date }
) {
  const timeEntries = await db.query.timeEntries.findMany({
    where: and(
      eq(timeEntries.projectId, projectId),
      gte(timeEntries.startTime, dateRange.start),
      lte(timeEntries.startTime, dateRange.end),
      eq(timeEntries.isBillable, true),
      isNull(timeEntries.invoiceId)
    ),
  });

  const project = await db.query.projects.findFirst({
    where: eq(projects.id, projectId),
    with: { client: true },
  });

  if (!project || !project.client) {
    throw new Error('Project or client not found');
  }

  // Calculate totals
  const lineItems = timeEntries.map(entry => ({
    description: entry.description || 'Development work',
    quantity: entry.duration / 60, // Hours
    unitPrice: entry.hourlyRate || project.hourlyRate,
    amount: (entry.duration / 60) * (entry.hourlyRate || project.hourlyRate),
  }));

  const subtotal = lineItems.reduce((sum, item) => sum + item.amount, 0);
  const tax = subtotal * 0.0; // Configure tax rate
  const total = subtotal + tax;

  // Create invoice
  const invoice = await db.insert(invoices).values({
    workspaceId: project.workspaceId,
    clientId: project.clientId,
    projectId: project.id,
    invoiceNumber: await generateInvoiceNumber(project.workspaceId),
    status: 'draft',
    subtotal,
    tax,
    total,
    currency: project.currency,
  }).returning();

  // Create line items
  await db.insert(invoiceLineItems).values(
    lineItems.map((item, index) => ({
      invoiceId: invoice[0].id,
      ...item,
      sortOrder: index,
    }))
  );

  // Link time entries to invoice
  await db.update(timeEntries)
    .set({ invoiceId: invoice[0].id })
    .where(inArray(timeEntries.id, timeEntries.map(e => e.id)));

  revalidatePath(`/[workspaceSlug]/invoices`);

  return invoice[0];
}
```

---

## Key UI Components

### 1. App Shell / Sidebar

```tsx
// components/layout/app-shell.tsx
export function AppShell({ children }: { children: React.ReactNode }) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="flex h-screen bg-obsidian">
      {/* Sidebar */}
      <aside className={cn(
        "flex flex-col border-r border-carbon bg-obsidian transition-all duration-300",
        collapsed ? "w-16" : "w-64"
      )}>
        {/* Logo */}
        <div className="p-4 border-b border-carbon">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-signal flex items-center justify-center">
              <span className="typo-headline text-sm text-obsidian font-bold">G0</span>
            </div>
            {!collapsed && (
              <span className="typo-headline text-lg text-platinum">
                <span className="glitch" data-text="Hub">Hub</span>
              </span>
            )}
          </Link>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-2 space-y-1">
          <NavItem icon={LayoutDashboard} label="Dashboard" href="/" collapsed={collapsed} />
          <NavItem icon={FolderKanban} label="Projects" href="/projects" collapsed={collapsed} />
          <NavItem icon={CheckSquare} label="Tasks" href="/tasks" collapsed={collapsed} />
          <NavItem icon={Users} label="Clients" href="/clients" collapsed={collapsed} />
          <NavItem icon={Clock} label="Time" href="/time" collapsed={collapsed} />
          <NavItem icon={FileText} label="Invoices" href="/invoices" collapsed={collapsed} />
          <NavItem icon={BarChart3} label="Reports" href="/reports" collapsed={collapsed} />
        </nav>

        {/* User Menu */}
        <div className="p-4 border-t border-carbon">
          <UserMenu collapsed={collapsed} />
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        {children}
      </main>
    </div>
  );
}
```

### 2. Task Card

```tsx
// components/tasks/task-card.tsx
export function TaskCard({ task, isDragging }: TaskCardProps) {
  return (
    <div className={cn(
      "p-3 bg-carbon rounded-lg border border-border",
      "hover:border-signal/50 transition-colors cursor-pointer",
      "group",
      isDragging && "opacity-50 rotate-3 scale-105"
    )}>
      {/* Priority indicator */}
      <div className={cn(
        "w-1 h-full absolute left-0 top-0 rounded-l-lg",
        task.priority === 'urgent' && "bg-red-500",
        task.priority === 'high' && "bg-orange-500",
        task.priority === 'medium' && "bg-yellow-500",
        task.priority === 'low' && "bg-blue-500",
      )} />

      <div className="flex items-start justify-between gap-2">
        <h4 className="typo-body text-platinum text-sm font-medium line-clamp-2">
          {task.title}
        </h4>
        <TaskMenu task={task} />
      </div>

      {/* Labels */}
      {task.labels.length > 0 && (
        <div className="flex flex-wrap gap-1 mt-2">
          {task.labels.map(label => (
            <Badge
              key={label.id}
              style={{ backgroundColor: label.color }}
              className="text-xs"
            >
              {label.name}
            </Badge>
          ))}
        </div>
      )}

      {/* Meta info */}
      <div className="flex items-center justify-between mt-3 text-tungsten">
        <div className="flex items-center gap-2">
          {task.dueDate && (
            <span className={cn(
              "text-xs flex items-center gap-1",
              isOverdue(task.dueDate) && "text-red-400"
            )}>
              <Calendar className="w-3 h-3" />
              {formatDate(task.dueDate)}
            </span>
          )}
          {task.estimatedHours && (
            <span className="text-xs flex items-center gap-1">
              <Clock className="w-3 h-3" />
              {task.estimatedHours}h
            </span>
          )}
        </div>

        {task.assignee && (
          <Avatar className="w-6 h-6">
            <AvatarImage src={task.assignee.avatarUrl} />
            <AvatarFallback>{task.assignee.name?.[0]}</AvatarFallback>
          </Avatar>
        )}
      </div>
    </div>
  );
}
```

### 3. Command Palette (Linear-style)

```tsx
// components/command-palette.tsx
'use client';

import { useEffect, useState } from 'react';
import { Command } from 'cmdk';

export function CommandPalette() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen(open => !open);
      }
    };

    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, []);

  return (
    <Command.Dialog
      open={open}
      onOpenChange={setOpen}
      className="fixed inset-0 z-50 flex items-start justify-center pt-[20vh]"
    >
      <div className="fixed inset-0 bg-obsidian/80 backdrop-blur-sm" />

      <div className="relative w-full max-w-xl bg-carbon border border-border rounded-lg shadow-2xl overflow-hidden">
        <Command.Input
          placeholder="Search projects, tasks, clients..."
          className="w-full px-4 py-3 bg-transparent text-platinum border-b border-border outline-none"
        />

        <Command.List className="max-h-80 overflow-auto p-2">
          <Command.Empty className="py-6 text-center text-tungsten">
            No results found.
          </Command.Empty>

          <Command.Group heading="Actions" className="text-xs text-tungsten uppercase mb-2">
            <CommandItem icon={Plus} label="New Project" shortcut="P" />
            <CommandItem icon={Plus} label="New Task" shortcut="T" />
            <CommandItem icon={Plus} label="New Client" shortcut="C" />
            <CommandItem icon={Clock} label="Start Timer" shortcut="S" />
          </Command.Group>

          <Command.Group heading="Navigation" className="text-xs text-tungsten uppercase mb-2">
            <CommandItem icon={LayoutDashboard} label="Go to Dashboard" />
            <CommandItem icon={FolderKanban} label="Go to Projects" />
            <CommandItem icon={CheckSquare} label="Go to Tasks" />
          </Command.Group>
        </Command.List>
      </div>
    </Command.Dialog>
  );
}
```

---

## Real-Time Features

### Supabase Subscriptions

```tsx
// hooks/use-realtime-tasks.ts
import { useEffect } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import { supabase } from '@/lib/supabase';

export function useRealtimeTasks(projectId: string) {
  const queryClient = useQueryClient();

  useEffect(() => {
    const channel = supabase
      .channel(`tasks:${projectId}`)
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'tasks',
          filter: `project_id=eq.${projectId}`,
        },
        (payload) => {
          queryClient.invalidateQueries({
            queryKey: ['tasks', projectId],
          });
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [projectId, queryClient]);
}
```

### Activity Feed SSE

```tsx
// app/api/events/route.ts
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const workspaceId = searchParams.get('workspaceId');

  const encoder = new TextEncoder();

  const stream = new ReadableStream({
    start(controller) {
      const sendEvent = (data: any) => {
        controller.enqueue(
          encoder.encode(`data: ${JSON.stringify(data)}\n\n`)
        );
      };

      // Subscribe to activity changes
      const channel = supabase
        .channel(`activity:${workspaceId}`)
        .on('postgres_changes', {
          event: 'INSERT',
          schema: 'public',
          table: 'activity_log',
          filter: `workspace_id=eq.${workspaceId}`,
        }, (payload) => {
          sendEvent({ type: 'activity', data: payload.new });
        })
        .subscribe();

      request.signal.addEventListener('abort', () => {
        supabase.removeChannel(channel);
        controller.close();
      });
    },
  });

  return new Response(stream, {
    headers: {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache',
      'Connection': 'keep-alive',
    },
  });
}
```

---

## Server Actions

```typescript
// server/actions/tasks.ts
'use server';

import { revalidatePath } from 'next/cache';
import { z } from 'zod';
import { auth } from '@clerk/nextjs/server';

const createTaskSchema = z.object({
  projectId: z.string().uuid(),
  title: z.string().min(1).max(500),
  description: z.string().optional(),
  status: z.enum(['backlog', 'todo', 'in_progress', 'in_review', 'done']).default('backlog'),
  priority: z.enum(['low', 'medium', 'high', 'urgent']).default('medium'),
  assigneeId: z.string().uuid().optional(),
  dueDate: z.date().optional(),
  estimatedHours: z.number().positive().optional(),
  parentId: z.string().uuid().optional(),
  milestoneId: z.string().uuid().optional(),
  labels: z.array(z.string().uuid()).optional(),
});

export async function createTask(input: z.infer<typeof createTaskSchema>) {
  const { userId } = await auth();
  if (!userId) throw new Error('Unauthorized');

  const validated = createTaskSchema.parse(input);

  const user = await db.query.users.findFirst({
    where: eq(users.clerkId, userId),
  });

  const [task] = await db.insert(tasks).values({
    ...validated,
    reporterId: user?.id,
  }).returning();

  // Add labels if provided
  if (validated.labels?.length) {
    await db.insert(taskLabels).values(
      validated.labels.map(labelId => ({
        taskId: task.id,
        labelId,
      }))
    );
  }

  // Log activity
  await db.insert(activityLog).values({
    workspaceId: (await db.query.projects.findFirst({
      where: eq(projects.id, validated.projectId),
    }))?.workspaceId,
    userId: user?.id,
    action: 'created',
    entityType: 'task',
    entityId: task.id,
    metadata: { title: task.title },
  });

  revalidatePath(`/[workspaceSlug]/projects/${validated.projectId}`);

  return task;
}

export async function updateTask(
  id: string,
  input: Partial<z.infer<typeof createTaskSchema>>
) {
  const { userId } = await auth();
  if (!userId) throw new Error('Unauthorized');

  const existingTask = await db.query.tasks.findFirst({
    where: eq(tasks.id, id),
  });

  if (!existingTask) throw new Error('Task not found');

  const [updated] = await db.update(tasks)
    .set({
      ...input,
      updatedAt: new Date(),
      ...(input.status === 'done' ? { completedAt: new Date() } : {}),
    })
    .where(eq(tasks.id, id))
    .returning();

  // Log activity
  const user = await db.query.users.findFirst({
    where: eq(users.clerkId, userId),
  });

  await db.insert(activityLog).values({
    workspaceId: (await db.query.projects.findFirst({
      where: eq(projects.id, existingTask.projectId),
    }))?.workspaceId,
    userId: user?.id,
    action: 'updated',
    entityType: 'task',
    entityId: id,
    metadata: {
      changes: Object.keys(input),
      oldValues: existingTask,
      newValues: input,
    },
  });

  revalidatePath(`/[workspaceSlug]/projects/${existingTask.projectId}`);

  return updated;
}

export async function deleteTask(id: string) {
  const { userId } = await auth();
  if (!userId) throw new Error('Unauthorized');

  const task = await db.query.tasks.findFirst({
    where: eq(tasks.id, id),
  });

  if (!task) throw new Error('Task not found');

  await db.delete(tasks).where(eq(tasks.id, id));

  revalidatePath(`/[workspaceSlug]/projects/${task.projectId}`);
}
```

---

## Keyboard Shortcuts

Implement Linear-style keyboard navigation:

| Shortcut | Action |
|----------|--------|
| `⌘ + K` | Open command palette |
| `⌘ + N` | New task |
| `⌘ + Shift + P` | New project |
| `G + D` | Go to Dashboard |
| `G + P` | Go to Projects |
| `G + T` | Go to Tasks |
| `G + C` | Go to Clients |
| `J` / `K` | Navigate up/down in lists |
| `Enter` | Open selected item |
| `E` | Edit selected item |
| `⌘ + ⏎` | Save and close |
| `Esc` | Close modal/panel |

---

## Role-Based Access Control

```typescript
// lib/permissions.ts
export const PERMISSIONS = {
  // Projects
  PROJECTS_CREATE: 'projects:create',
  PROJECTS_READ: 'projects:read',
  PROJECTS_UPDATE: 'projects:update',
  PROJECTS_DELETE: 'projects:delete',
  PROJECTS_ARCHIVE: 'projects:archive',

  // Tasks
  TASKS_CREATE: 'tasks:create',
  TASKS_READ: 'tasks:read',
  TASKS_UPDATE: 'tasks:update',
  TASKS_DELETE: 'tasks:delete',
  TASKS_ASSIGN: 'tasks:assign',

  // Time
  TIME_LOG: 'time:log',
  TIME_EDIT_OWN: 'time:edit_own',
  TIME_EDIT_ALL: 'time:edit_all',
  TIME_APPROVE: 'time:approve',

  // Invoices
  INVOICES_CREATE: 'invoices:create',
  INVOICES_READ: 'invoices:read',
  INVOICES_SEND: 'invoices:send',
  INVOICES_DELETE: 'invoices:delete',

  // Clients
  CLIENTS_CREATE: 'clients:create',
  CLIENTS_READ: 'clients:read',
  CLIENTS_UPDATE: 'clients:update',
  CLIENTS_DELETE: 'clients:delete',

  // Team
  MEMBERS_INVITE: 'members:invite',
  MEMBERS_REMOVE: 'members:remove',
  MEMBERS_MANAGE_ROLES: 'members:manage_roles',

  // Settings
  SETTINGS_WORKSPACE: 'settings:workspace',
  SETTINGS_BILLING: 'settings:billing',
  SETTINGS_INTEGRATIONS: 'settings:integrations',
} as const;

export const ROLE_PERMISSIONS: Record<string, string[]> = {
  owner: Object.values(PERMISSIONS),
  admin: [
    ...Object.values(PERMISSIONS).filter(p => !p.startsWith('settings:billing')),
  ],
  manager: [
    PERMISSIONS.PROJECTS_CREATE,
    PERMISSIONS.PROJECTS_READ,
    PERMISSIONS.PROJECTS_UPDATE,
    PERMISSIONS.TASKS_CREATE,
    PERMISSIONS.TASKS_READ,
    PERMISSIONS.TASKS_UPDATE,
    PERMISSIONS.TASKS_ASSIGN,
    PERMISSIONS.TIME_LOG,
    PERMISSIONS.TIME_EDIT_OWN,
    PERMISSIONS.TIME_APPROVE,
    PERMISSIONS.INVOICES_READ,
    PERMISSIONS.CLIENTS_READ,
    PERMISSIONS.CLIENTS_UPDATE,
    PERMISSIONS.MEMBERS_INVITE,
  ],
  member: [
    PERMISSIONS.PROJECTS_READ,
    PERMISSIONS.TASKS_CREATE,
    PERMISSIONS.TASKS_READ,
    PERMISSIONS.TASKS_UPDATE,
    PERMISSIONS.TIME_LOG,
    PERMISSIONS.TIME_EDIT_OWN,
    PERMISSIONS.CLIENTS_READ,
  ],
  viewer: [
    PERMISSIONS.PROJECTS_READ,
    PERMISSIONS.TASKS_READ,
    PERMISSIONS.CLIENTS_READ,
  ],
};

export function hasPermission(role: string, permission: string): boolean {
  return ROLE_PERMISSIONS[role]?.includes(permission) ?? false;
}

export function requirePermission(role: string, permission: string) {
  if (!hasPermission(role, permission)) {
    throw new Error(`Permission denied: ${permission}`);
  }
}
```

---

## Deployment Checklist

### Environment Variables

```env
# App
NEXT_PUBLIC_APP_URL=https://hub.glitchzerolabs.com

# Database
DATABASE_URL=postgresql://...
DIRECT_URL=postgresql://...

# Supabase
NEXT_PUBLIC_SUPABASE_URL=https://xxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=xxx
SUPABASE_SERVICE_ROLE_KEY=xxx

# Clerk
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_xxx
CLERK_SECRET_KEY=sk_xxx
CLERK_WEBHOOK_SECRET=whsec_xxx

# Stripe (optional)
STRIPE_SECRET_KEY=sk_xxx
STRIPE_WEBHOOK_SECRET=whsec_xxx
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_xxx

# Email (Resend)
RESEND_API_KEY=re_xxx
```

### Pre-Launch Checklist

- [ ] Database migrations applied
- [ ] Supabase RLS policies configured
- [ ] Clerk webhooks set up
- [ ] Email templates configured
- [ ] Error tracking (Sentry) configured
- [ ] Analytics (Posthog/Plausible) set up
- [ ] SSL certificates valid
- [ ] Environment variables in production
- [ ] Backup strategy in place
- [ ] Rate limiting configured
- [ ] CORS settings verified

---

## MVP Feature Priorities

### Phase 1: Core (Week 1-2)
- [ ] Authentication (Clerk)
- [ ] Workspace creation
- [ ] Project CRUD
- [ ] Task CRUD
- [ ] Kanban board
- [ ] Basic dashboard

### Phase 2: Time & Billing (Week 3)
- [ ] Time tracking (start/stop, manual)
- [ ] Timesheet view
- [ ] Invoice generation
- [ ] Invoice PDF export

### Phase 3: Client Features (Week 4)
- [ ] Client management
- [ ] Client portal (basic)
- [ ] Client-visible tasks
- [ ] Invoice viewing

### Phase 4: Polish (Week 5)
- [ ] Real-time updates
- [ ] Activity feed
- [ ] Notifications
- [ ] Command palette
- [ ] Keyboard shortcuts
- [ ] Mobile responsiveness

### Future Enhancements
- [ ] Gantt/timeline view
- [ ] Resource planning
- [ ] Reporting dashboard
- [ ] Integrations (Slack, GitHub)
- [ ] Stripe payments
- [ ] Advanced permissions
- [ ] API for external access

---

## Summary

This prompt provides a comprehensive blueprint for building **GlitchZero Hub** - a modern, fast, and beautiful agency project management application. The implementation prioritizes:

1. **Speed** - Sub-100ms interactions like Linear
2. **Agency Focus** - Time tracking, billing, client portals
3. **Beautiful UI** - GlitchZero design system with signature effects
4. **Real-time** - Live updates across all users
5. **Accessibility** - Full keyboard navigation, ARIA support
6. **Scalability** - Multi-tenant architecture with RBAC

Build this application iteratively, starting with the MVP features and progressively adding more capabilities. The tech stack is optimized for developer experience and production performance.

---

*GlitchZero Hub - Managing Chaos, Delivering Excellence.*
