<context>

# GlitchZero Dock - Internal Project Management System
## Product Requirements Document (PRD)
### Version 1.0.0 | December 2025

---

# 1. Overview

## 1.1 Executive Summary

GlitchZero Dock is an internal project management and tracking system designed specifically for GlitchZero Labs, a software development agency specializing in custom digital solutions for Indian businesses. The system provides comprehensive project tracking, task management, time tracking, client management, and invoicing capabilities tailored to the operational needs of a software development consultancy.

This application is NOT a generic project management tool. It is purpose-built to support GlitchZero Labs' core service offerings:
- Web Development (React, Next.js)
- Mobile App Development
- E-commerce Solutions
- Custom Software Development

The system prioritizes internal operational efficiency over external client-facing features, focusing exclusively on what the team needs to manage projects effectively.

## 1.2 Problem Statement

### Primary Problems

1. **Fragmented Project Visibility**: Without a centralized system, project status, progress, and health are scattered across multiple tools (spreadsheets, emails, chat), making it difficult to understand the true state of ongoing work.

2. **Inaccurate Time Tracking**: Manual time tracking leads to unbilled hours, inaccurate estimates for future projects, and poor understanding of actual project profitability.

3. **Reactive Project Management**: Without project health indicators and milestone tracking, issues are discovered too late—when deadlines are missed or budgets are exceeded.

4. **Resource Allocation Blindness**: No visibility into team workload leads to uneven distribution, burnout risks, and missed deadlines due to overcommitment.

5. **Invoice Generation Friction**: Creating invoices manually from time entries is time-consuming and error-prone, delaying cash flow.

6. **Client Context Switching**: Information about clients, their projects, contacts, and billing preferences is not centralized, causing inefficiency when switching between client contexts.

### Secondary Problems

7. **Lack of Historical Data**: Without structured data, it's impossible to analyze past project performance, estimate accuracy, or identify process improvements.

8. **No Standardized Workflow**: Different team members manage tasks differently, leading to inconsistent project execution and knowledge silos.

9. **Communication Gaps**: Important updates about projects, tasks, and deadlines are not systematically communicated to relevant team members.

## 1.3 Target Users

### Primary Users

| User Type | Description | Primary Needs |
|-----------|-------------|---------------|
| **Agency Owner/Principal** | Business owner managing overall operations | Dashboard overview, profitability analysis, client health, revenue tracking |
| **Project Manager** | Oversees project delivery and client communication | Project status, milestone tracking, resource allocation, deadline management |
| **Senior Developer** | Leads technical implementation | Task prioritization, time tracking, subtask breakdown, dependency management |
| **Developer** | Implements features and fixes bugs | Task list, time logging, status updates, clear specifications |
| **Designer** | Creates UI/UX deliverables | Design task tracking, milestone alignment, time logging |

### User Distribution (Expected)

- Agency Owner: 1-2 users
- Project Managers: 1-3 users
- Senior Developers: 2-4 users
- Developers: 3-8 users
- Designers: 1-2 users
- **Total Expected Users**: 8-20 concurrent users

## 1.4 Value Proposition

### For the Agency Owner
- **Real-time visibility** into all project health and profitability
- **Revenue forecasting** based on project status and unbilled hours
- **Resource optimization** through workload visibility
- **Faster invoicing** with automated time-to-invoice workflow

### For Project Managers
- **Proactive risk identification** through health indicators
- **Milestone-based delivery tracking** with payment alignment
- **Team capacity planning** to prevent overcommitment
- **Centralized client context** for efficient communication

### For Developers
- **Clear task prioritization** with visual indicators
- **Seamless time tracking** that doesn't disrupt workflow
- **Task dependencies** to understand blockers
- **Progress visibility** to team and stakeholders

## 1.5 Success Metrics

### Quantitative Metrics

| Metric | Current State | Target | Measurement Method |
|--------|---------------|--------|-------------------|
| Billable Hour Capture Rate | ~70% (estimated) | 95%+ | Logged hours vs working hours |
| Invoice Generation Time | 2-4 hours/month | <30 min/month | Time from period end to invoice sent |
| Project Health Visibility | 0% (no tracking) | 100% | % of projects with accurate health status |
| Task Completion Accuracy | Unknown | 85%+ within estimates | Estimated vs actual hours per task |
| Time to Identify At-Risk Projects | Days/weeks | <24 hours | Time from issue emergence to visibility |
| Unbilled Revenue Visibility | Not tracked | Real-time | Dashboard shows pending/unbilled amounts |

### Qualitative Metrics

- Team members report less administrative overhead
- Project managers can answer client status questions instantly
- No more "surprise" deadline misses due to invisible blockers
- Consistent project execution regardless of team member

## 1.6 Scope Definition

### In Scope (Phase 1 - MVP)

- User authentication and authorization
- Project CRUD with status, type, and priority
- Task management with Kanban board
- Task priority, type, and labels
- Basic subtasks (single level)
- Time tracking (start/stop timer + manual entry)
- Client management with contacts
- Invoice generation from time entries
- Dashboard with key metrics
- Real-time updates via Firebase
- Mobile-responsive design

### In Scope (Phase 2 - Enhanced)

- Project health indicators (calculated)
- Milestone tracking
- Time reports and analytics
- Workload visualization
- Project timeline view
- Enhanced dashboard with trends
- Notification system improvements
- Task comments and activity log

### In Scope (Phase 3 - Advanced)

- Advanced reporting and exports
- Team capacity planning
- Project templates
- Recurring tasks
- Bulk operations
- Keyboard shortcuts
- Search across all entities

### Out of Scope (Explicitly Excluded)

| Feature | Reason for Exclusion |
|---------|---------------------|
| Client Portal | Internal tool only; clients use email for updates |
| External Collaboration | No client access to system |
| Third-Party Integrations | Keep dependencies minimal initially |
| AI-Powered Features | Not required for core functionality |
| Multi-Organization Support | Single agency use only |
| Gantt Charts | Timeline view is simpler alternative |
| Custom Field Builder | Predefined fields sufficient for agency needs |
| Marketing/Sales Pipeline | Separate concern, use dedicated CRM if needed |
| Complex Approval Workflows | Small team doesn't require formal approvals |
| White-labeling | Not selling to other agencies |

---

# 2. Core Features

## 2.1 Authentication & Authorization

### 2.1.1 What It Does
Provides secure user authentication and role-based access control for all system features. Users can sign up, sign in, reset passwords, and manage their profiles. The system enforces access permissions based on user roles and project membership.

### 2.1.2 Why It's Important
- **Security**: Protects sensitive client and financial data
- **Accountability**: Every action is tied to a specific user
- **Access Control**: Ensures users only see projects they're assigned to
- **Audit Trail**: Enables tracking of who did what and when

### 2.1.3 How It Works

#### Authentication Flow
1. User navigates to application URL
2. If not authenticated, redirected to sign-in page
3. User enters email and password
4. Firebase Auth validates credentials
5. On success, user session is established
6. User is redirected to dashboard
7. Session persists until explicit logout or expiration

#### User Roles and Permissions

| Role | Projects | Tasks | Time | Clients | Invoices | Settings |
|------|----------|-------|------|---------|----------|----------|
| **Owner** | Full CRUD | Full CRUD | Full CRUD | Full CRUD | Full CRUD | Full access |
| **Editor** | View, Edit | Full CRUD | Own entries | View | View | Limited |
| **Viewer** | View only | View only | Own entries | View | None | None |

#### Project-Level Membership
- Users are assigned to specific projects with a role (owner/editor/viewer)
- A user can have different roles on different projects
- Project owners can manage project membership
- Tasks inherit access from parent project

### 2.1.4 Functional Requirements

| ID | Requirement | Priority |
|----|-------------|----------|
| AUTH-001 | User can sign up with email and password | High |
| AUTH-002 | User can sign in with email and password | High |
| AUTH-003 | User can sign out from any page | High |
| AUTH-004 | User can reset password via email | High |
| AUTH-005 | User can update profile (name, avatar) | Medium |
| AUTH-006 | Session persists across browser refreshes | High |
| AUTH-007 | Inactive sessions expire after 7 days | Medium |
| AUTH-008 | Failed login attempts are rate-limited | High |
| AUTH-009 | Password must meet complexity requirements | High |
| AUTH-010 | Email verification required for new accounts | Medium |

### 2.1.5 Technical Specifications

- **Provider**: Firebase Authentication
- **Auth Methods**: Email/Password (primary), Google OAuth (future)
- **Session Management**: Firebase ID tokens with refresh
- **Password Requirements**: Minimum 8 characters, 1 uppercase, 1 number
- **Rate Limiting**: 5 failed attempts triggers 15-minute lockout

---

## 2.2 Project Management

### 2.2.1 What It Does
Enables creation, organization, and tracking of client projects throughout their lifecycle. Each project represents a distinct engagement with defined scope, timeline, budget, and team. Projects serve as the primary organizational unit containing tasks, time entries, milestones, and invoices.

### 2.2.2 Why It's Important
- **Central Organization**: All related work items grouped under one project
- **Financial Tracking**: Budget and billing settings per project
- **Status Visibility**: Clear lifecycle state for every engagement
- **Client Association**: Direct link between work and paying client
- **Progress Measurement**: Aggregate metrics for completion and health

### 2.2.3 How It Works

#### Project Lifecycle

```
[Planning] → [Active] → [Completed]
     ↓          ↓
[Cancelled] ← [On Hold]
```

| Status | Description | Entry Criteria | Exit Criteria |
|--------|-------------|----------------|---------------|
| **Planning** | Project is being scoped and planned | Project created | Start date reached, team assigned |
| **Active** | Development work is ongoing | Planning complete | All milestones complete OR cancelled |
| **On Hold** | Temporarily paused | Client request, blocker | Issue resolved, client ready |
| **Completed** | All deliverables finished | Final milestone done | Client signoff received |
| **Cancelled** | Project terminated early | Client decision, scope issues | Formal cancellation |

#### Project Types

| Type | Description | Typical Duration | Billing Model |
|------|-------------|------------------|---------------|
| **Web Development** | React/Next.js websites and applications | 4-16 weeks | Fixed or Hourly |
| **Mobile App** | iOS/Android applications | 8-24 weeks | Fixed or Hourly |
| **E-commerce** | Online stores and marketplaces | 6-20 weeks | Fixed |
| **Custom Software** | Bespoke business applications | 12-52 weeks | Retainer or Hourly |
| **Maintenance** | Ongoing support and updates | Ongoing | Retainer |

#### Project Priority Levels

| Priority | Visual Indicator | Description | SLA |
|----------|-----------------|-------------|-----|
| **Urgent** | Red badge | Critical deadline or client escalation | Daily attention |
| **High** | Orange badge | Important milestone approaching | 2-3x weekly review |
| **Medium** | Yellow badge | Normal priority project | Weekly review |
| **Low** | Blue badge | Maintenance or flexible timeline | Bi-weekly review |

#### Project Health Calculation

Project health is automatically calculated based on three factors:

```
Health Score = (Timeline Score × 0.3) + (Budget Score × 0.3) + (Task Score × 0.4)

Timeline Score:
- Days Remaining / Total Duration × 100
- Capped at 100%, goes negative if overdue

Budget Score:
- (Budget - Spent) / Budget × 100
- Capped at 100%, goes negative if over budget

Task Score:
- Completed Tasks / Total Tasks × 100

Health Display:
- Green "On Track": Score ≥ 70%
- Yellow "At Risk": Score 40-69%
- Red "Behind": Score < 40%
```

### 2.2.4 Functional Requirements

| ID | Requirement | Priority |
|----|-------------|----------|
| PROJ-001 | User can create a new project with required fields | High |
| PROJ-002 | User can edit project details (name, dates, budget) | High |
| PROJ-003 | User can delete a project (with confirmation) | High |
| PROJ-004 | User can change project status | High |
| PROJ-005 | User can assign members to project with roles | High |
| PROJ-006 | User can view list of all accessible projects | High |
| PROJ-007 | User can filter projects by status, client, type | High |
| PROJ-008 | User can sort projects by name, date, priority | Medium |
| PROJ-009 | User can search projects by name | Medium |
| PROJ-010 | System calculates and displays project health | High |
| PROJ-011 | User can view project timeline visualization | Medium |
| PROJ-012 | User can duplicate a project as template | Low |
| PROJ-013 | User can archive completed projects | Medium |
| PROJ-014 | User can set project color for visual identification | Low |
| PROJ-015 | User can add tags to projects for categorization | Medium |

### 2.2.5 Data Model

```typescript
interface Project {
  // Identity
  id: string;                              // Firestore document ID

  // Core Information
  name: string;                            // Project display name (required)
  description: string;                     // Detailed description (required)

  // Classification
  status: ProjectStatus;                   // planning | active | on-hold | completed | cancelled
  type: ProjectType;                       // web-development | mobile-app | ecommerce | custom-software | maintenance
  priority: ProjectPriority;               // low | medium | high | urgent
  color?: string;                          // Hex color for visual identification
  tags?: string[];                         // Custom categorization tags

  // Timeline
  startDate: Timestamp;                    // Project start date (required)
  endDate: Timestamp;                      // Expected completion date (required)
  actualEndDate?: Timestamp;               // Actual completion date (set when completed)

  // Financial
  clientId?: string;                       // Reference to Client document
  billingType: BillingType;                // hourly | fixed | retainer
  budget?: number;                         // Total budget in currency units
  hourlyRate?: number;                     // Default hourly rate for this project
  estimatedHours?: number;                 // Total estimated hours

  // Progress (denormalized for performance)
  progressPercentage?: number;             // 0-100, calculated or manual override
  totalTasks?: number;                     // Denormalized task count
  completedTasks?: number;                 // Denormalized completed task count
  totalLoggedHours?: number;               // Denormalized from time entries
  totalBillableAmount?: number;            // Denormalized billable amount

  // Health (calculated)
  healthStatus?: HealthStatus;             // on-track | at-risk | behind
  healthScore?: number;                    // 0-100 calculated score

  // Access Control
  members: {                               // Map of userId to role
    [userId: string]: 'owner' | 'editor' | 'viewer';
  };
  memberIds: string[];                     // Array for efficient queries

  // Metadata
  createdAt: Timestamp;                    // Document creation time
  updatedAt: Timestamp;                    // Last modification time
  createdBy: string;                       // User ID who created
}

type ProjectStatus = 'planning' | 'active' | 'on-hold' | 'completed' | 'cancelled';
type ProjectType = 'web-development' | 'mobile-app' | 'ecommerce' | 'custom-software' | 'maintenance';
type ProjectPriority = 'low' | 'medium' | 'high' | 'urgent';
type BillingType = 'hourly' | 'fixed' | 'retainer';
type HealthStatus = 'on-track' | 'at-risk' | 'behind';
```

### 2.2.6 UI Components

| Component | Description | Location |
|-----------|-------------|----------|
| ProjectListView | Table/grid of all projects with filtering | /projects |
| ProjectCard | Summary card showing project info and health | /projects, /dashboard |
| ProjectDetailView | Full project page with tabs for tasks, time, etc. | /projects/[id] |
| CreateProjectDialog | Modal form for new project creation | Global (via header) |
| EditProjectDialog | Modal form for editing existing project | /projects/[id] |
| ProjectStatusBadge | Color-coded status indicator | Various |
| ProjectHealthIndicator | Visual health meter (green/yellow/red) | ProjectCard, ProjectDetailView |
| ProjectTimeline | Horizontal timeline showing project dates | /projects/[id] |
| ProjectFilters | Status, type, client, priority filters | /projects |

---

## 2.3 Task Management

### 2.3.1 What It Does
Provides comprehensive task tracking with a Kanban-style board interface. Tasks represent individual work items within a project, with support for prioritization, categorization, assignment, due dates, time estimates, and hierarchical organization through subtasks.

### 2.3.2 Why It's Important
- **Work Breakdown**: Converts project scope into actionable items
- **Visibility**: Everyone can see what's being worked on
- **Prioritization**: Clear visual hierarchy of what matters most
- **Accountability**: Single assignee per task ensures ownership
- **Progress Tracking**: Status movement shows work completion
- **Estimation Accuracy**: Compare estimated vs actual for future planning

### 2.3.3 How It Works

#### Task Workflow

```
[Backlog] → [To Do] → [In Progress] → [Done]
```

| Status | Description | Actions Available |
|--------|-------------|-------------------|
| **Backlog** | Task identified but not yet prioritized | Prioritize, Estimate, Assign |
| **To Do** | Ready to be worked on | Start work, Reassign |
| **In Progress** | Actively being worked on | Log time, Add blockers, Complete |
| **Done** | Work completed | Review, Reopen if issues |

#### Task Types

| Type | Icon | Description | Use Case |
|------|------|-------------|----------|
| **Feature** | Star | New functionality | User stories, new capabilities |
| **Bug** | Bug | Defect or issue | Problems to fix |
| **Improvement** | Arrow up | Enhancement to existing | Optimization, refactoring |
| **Task** | Checkbox | General work item | Meetings, research, admin |

#### Task Priority

| Priority | Color | Kanban Position | Description |
|----------|-------|-----------------|-------------|
| **Urgent** | Red (#ef4444) | Top | Drop everything, do this now |
| **High** | Orange (#f97316) | Upper | Important, do this soon |
| **Medium** | Yellow (#eab308) | Middle | Normal priority |
| **Low** | Blue (#3b82f6) | Lower | Nice to have, flexible timing |
| **None** | Gray (#6b7280) | Bottom | Unprioritzed |

#### Subtasks

Subtasks allow breaking down complex tasks into smaller, trackable items:

- Maximum one level of nesting (no sub-subtasks)
- Subtasks inherit project membership from parent
- Subtask completion contributes to parent progress
- Subtasks can have their own estimates and assignees
- Parent task auto-completes when all subtasks are done (optional)

#### Task Labels

Custom labels for additional categorization:

| Label Category | Examples |
|----------------|----------|
| **Technical Area** | frontend, backend, api, database, devops |
| **Skill Required** | react, nextjs, nodejs, design, testing |
| **Effort Size** | tiny, small, medium, large, epic |
| **Source** | client-request, internal, tech-debt, bug-report |

### 2.3.4 Functional Requirements

| ID | Requirement | Priority |
|----|-------------|----------|
| TASK-001 | User can create a task with title (required) and optional fields | High |
| TASK-002 | User can edit any field of an existing task | High |
| TASK-003 | User can delete a task (with confirmation) | High |
| TASK-004 | User can change task status via drag-and-drop on Kanban | High |
| TASK-005 | User can change task status via dropdown | High |
| TASK-006 | User can assign a task to a project member | High |
| TASK-007 | User can set task priority with visual indicator | High |
| TASK-008 | User can set task type with visual indicator | High |
| TASK-009 | User can add/remove labels on tasks | High |
| TASK-010 | User can set due date with calendar picker | High |
| TASK-011 | User can set estimated hours for task | High |
| TASK-012 | User can view list of tasks in Kanban board view | High |
| TASK-013 | User can view list of tasks in table/list view | Medium |
| TASK-014 | User can filter tasks by status, priority, type, assignee, label | High |
| TASK-015 | User can search tasks by title | Medium |
| TASK-016 | User can reorder tasks within a column via drag-and-drop | High |
| TASK-017 | User can create subtasks under a parent task | High |
| TASK-018 | User can view subtask progress on parent task | High |
| TASK-019 | Overdue tasks are visually highlighted | High |
| TASK-020 | User can view task detail in slide-out panel | High |
| TASK-021 | System tracks logged time vs estimated time per task | High |
| TASK-022 | User can bulk update tasks (status, priority, assignee) | Medium |
| TASK-023 | User can duplicate a task | Low |
| TASK-024 | User can move task to different project | Low |

### 2.3.5 Data Model

```typescript
interface Task {
  // Identity
  id: string;                              // Firestore document ID

  // Core Information
  title: string;                           // Task title (required)
  description?: string;                    // Detailed description (markdown supported)

  // Classification
  status: TaskStatus;                      // Backlog | To Do | In Progress | Done
  priority: TaskPriority;                  // none | low | medium | high | urgent
  type: TaskType;                          // feature | bug | improvement | task
  labels?: string[];                       // Custom labels array

  // Relationships
  projectId: string;                       // Parent project reference (required)
  parentTaskId?: string;                   // Parent task ID for subtasks

  // Assignment
  assignedTo?: string;                     // User ID of assignee

  // Time Management
  dueDate?: Timestamp;                     // Task due date
  startDate?: Timestamp;                   // Planned start date
  estimatedHours?: number;                 // Estimated hours to complete
  loggedHours?: number;                    // Denormalized from time entries

  // Completion
  completedAt?: Timestamp;                 // When task was marked done
  completedBy?: string;                    // Who marked it done

  // Ordering
  order: number;                           // Position within column for drag-drop

  // Access Control (inherited from project, cached for queries)
  members: {
    [userId: string]: 'owner' | 'editor' | 'viewer';
  };
  memberIds: string[];                     // Array for efficient queries

  // Subtask Tracking (denormalized)
  subtaskCount?: number;                   // Total subtasks
  completedSubtaskCount?: number;          // Completed subtasks

  // Metadata
  createdAt: Timestamp;
  updatedAt: Timestamp;
  createdBy: string;
}

type TaskStatus = 'Backlog' | 'To Do' | 'In Progress' | 'Done';
type TaskPriority = 'none' | 'low' | 'medium' | 'high' | 'urgent';
type TaskType = 'feature' | 'bug' | 'improvement' | 'task';
```

### 2.3.6 UI Components

| Component | Description | Location |
|-----------|-------------|----------|
| KanbanBoard | Four-column drag-drop board | /projects/[id]/tasks |
| KanbanColumn | Single status column with task cards | KanbanBoard |
| TaskCard | Compact task summary for Kanban | KanbanColumn |
| TaskListView | Table view of tasks with sorting | /projects/[id]/tasks?view=list |
| TaskDetailPanel | Slide-out panel with full task details | Over KanbanBoard |
| CreateTaskDialog | Modal for new task creation | Global + Project page |
| TaskFilters | Filter bar for status, priority, type, assignee | Task views |
| TaskPriorityBadge | Colored priority indicator | TaskCard, TaskDetailPanel |
| TaskTypeBadge | Icon-based type indicator | TaskCard, TaskDetailPanel |
| TaskLabelChips | Colored label chips | TaskCard, TaskDetailPanel |
| SubtaskList | Checklist of subtasks | TaskDetailPanel |
| TaskDueDatePicker | Calendar picker with overdue warning | TaskDetailPanel, CreateTaskDialog |

---

## 2.4 Time Tracking

### 2.4.1 What It Does
Enables accurate tracking of time spent on projects and tasks. Supports both real-time timer (start/stop) and manual entry methods. Time entries form the basis for billable hours, invoicing, project budget tracking, and productivity analysis.

### 2.4.2 Why It's Important
- **Accurate Billing**: Capture all billable hours for invoicing
- **Budget Management**: Track actual vs budgeted hours per project
- **Productivity Insights**: Understand where time is actually spent
- **Estimation Improvement**: Compare estimates to actuals for better future planning
- **Resource Utilization**: Calculate billable utilization rates
- **Profitability Analysis**: Determine true project profitability

### 2.4.3 How It Works

#### Time Entry Methods

1. **Real-time Timer**
   - User clicks "Start Timer" on dashboard or project page
   - Timer counts up in real-time (visible in header)
   - User can pause and resume timer
   - User clicks "Stop" to complete entry
   - Duration is calculated automatically

2. **Manual Entry**
   - User opens time entry form
   - User enters date, start time, end time (or duration)
   - Duration is calculated or entered directly
   - Entry is saved immediately

#### Billable vs Non-Billable

| Category | Examples | Default Rate |
|----------|----------|--------------|
| **Billable** | Development, design, meetings with client | Project hourly rate or default |
| **Non-Billable** | Internal meetings, training, admin | $0 |

#### Time Entry States

| State | Description | Invoice Eligibility |
|-------|-------------|---------------------|
| **Running** | Timer is currently active | No |
| **Stopped** | Entry complete, not invoiced | Yes (if billable) |
| **Invoiced** | Included in an invoice | No (already billed) |
| **Paid** | Invoice has been paid | No |

### 2.4.4 Functional Requirements

| ID | Requirement | Priority |
|----|-------------|----------|
| TIME-001 | User can start a timer from any page (via header) | High |
| TIME-002 | User can start a timer associated with a specific project | High |
| TIME-003 | User can start a timer associated with a specific task | High |
| TIME-004 | Running timer is visible in global header | High |
| TIME-005 | User can pause and resume running timer | Medium |
| TIME-006 | User can stop timer and save entry | High |
| TIME-007 | User can add description while timer is running | High |
| TIME-008 | User can create manual time entry with date/time/duration | High |
| TIME-009 | User can edit own time entries | High |
| TIME-010 | User can delete own time entries (if not invoiced) | High |
| TIME-011 | User can mark entry as billable or non-billable | High |
| TIME-012 | System calculates billable amount based on hours × rate | High |
| TIME-013 | User can view time entries in weekly timesheet format | High |
| TIME-014 | User can view time entries in daily list format | High |
| TIME-015 | User can filter entries by project, date range, billable status | High |
| TIME-016 | System prevents duplicate running timers | High |
| TIME-017 | Timer state persists across page refreshes | High |
| TIME-018 | System shows warning for unusually long entries (>8 hours) | Medium |
| TIME-019 | User can set default hourly rate in profile | Medium |
| TIME-020 | Admin can view and edit all team time entries | Medium |
| TIME-021 | System supports time rounding rules (nearest 15min) | Low |

### 2.4.5 Data Model

```typescript
interface TimeEntry {
  // Identity
  id: string;                              // Firestore document ID

  // Relationships
  projectId: string;                       // Required: parent project
  taskId?: string;                         // Optional: associated task
  userId: string;                          // Who logged this time
  invoiceId?: string;                      // Invoice if billed

  // Time Data
  startTime: Timestamp;                    // Entry start time
  endTime?: Timestamp;                     // Entry end time (null if running)
  duration: number;                        // Duration in minutes
  isRunning: boolean;                      // Is timer currently active

  // Description
  description?: string;                    // What was worked on

  // Billing
  isBillable: boolean;                     // Is this billable time
  hourlyRate?: number;                     // Rate for this entry
  billableAmount?: number;                 // Calculated: (duration/60) × hourlyRate

  // Status
  status: TimeEntryStatus;                 // draft | submitted | invoiced | paid

  // Metadata
  createdAt: Timestamp;
  updatedAt: Timestamp;
}

type TimeEntryStatus = 'draft' | 'submitted' | 'invoiced' | 'paid';
```

### 2.4.6 UI Components

| Component | Description | Location |
|-----------|-------------|----------|
| GlobalTimer | Persistent timer in header | AppHeader |
| TimerButton | Start/stop button with status | GlobalTimer, TimeTracker |
| TimeTracker | Full time entry interface | /time |
| WeeklyTimesheet | Grid view: days × projects | /time?view=week |
| DailyTimeList | List of entries for a day | /time?view=day |
| TimeEntryRow | Single entry in list | WeeklyTimesheet, DailyTimeList |
| ManualTimeEntryForm | Form for manual entry | Modal or inline |
| TimeEntryEditDialog | Edit existing entry | Modal |
| TimeFilters | Date range, project, billable filters | /time |
| TimeStats | Summary cards (total, billable, etc.) | /time |

---

## 2.5 Client Management

### 2.5.1 What It Does
Maintains a centralized database of clients with contact information, billing preferences, and relationship history. Clients are linked to projects, invoices, and time entries to provide a complete picture of each client relationship.

### 2.5.2 Why It's Important
- **Centralized Information**: All client details in one place
- **Billing Accuracy**: Per-client rates and preferences
- **Relationship Tracking**: History of projects and invoices per client
- **Contact Management**: Multiple contacts per organization
- **Quick Context**: Instant access to client details during project work

### 2.5.3 How It Works

#### Client Lifecycle

```
[Lead] → [Active] → [Inactive]
```

| Status | Description | Indicators |
|--------|-------------|------------|
| **Lead** | Potential client, not yet engaged | No projects, initial contact |
| **Active** | Currently has active projects | At least one active project |
| **Inactive** | Past client, no current work | All projects completed/cancelled |

#### Contact Management

Each client can have multiple contacts:
- One contact is designated as "Primary" for main communication
- Contacts have role, email, and phone fields
- Contacts are not separate user accounts (internal use only)

### 2.5.4 Functional Requirements

| ID | Requirement | Priority |
|----|-------------|----------|
| CLIENT-001 | User can create a new client with name (required) | High |
| CLIENT-002 | User can edit client details | High |
| CLIENT-003 | User can delete a client (with confirmation, if no projects) | High |
| CLIENT-004 | User can add multiple contacts to a client | High |
| CLIENT-005 | User can designate one contact as primary | High |
| CLIENT-006 | User can edit and remove contacts | High |
| CLIENT-007 | User can set client status (lead/active/inactive) | High |
| CLIENT-008 | User can add notes to client record | Medium |
| CLIENT-009 | User can upload client logo | Low |
| CLIENT-010 | User can view list of all clients | High |
| CLIENT-011 | User can filter clients by status | High |
| CLIENT-012 | User can search clients by name | Medium |
| CLIENT-013 | User can view client detail page with projects and invoices | High |
| CLIENT-014 | User can set default billing preferences per client | Medium |
| CLIENT-015 | System auto-updates client status based on project status | Medium |

### 2.5.5 Data Model

```typescript
interface Client {
  // Identity
  id: string;                              // Firestore document ID

  // Basic Information
  name: string;                            // Client/company name (required)
  company?: string;                        // Legal company name if different
  email?: string;                          // Primary email
  phone?: string;                          // Primary phone
  logoUrl?: string;                        // Company logo URL

  // Status
  status: ClientStatus;                    // lead | active | inactive

  // Contacts
  contacts: ClientContact[];               // Array of contact persons

  // Billing Defaults
  defaultHourlyRate?: number;              // Default rate for new projects
  defaultBillingType?: BillingType;        // hourly | fixed | retainer
  paymentTerms?: number;                   // Days (e.g., 30 for Net 30)
  currency?: string;                       // USD, INR, etc.

  // Notes
  notes?: string;                          // General notes (internal)

  // Relationship Summary (denormalized)
  totalProjects?: number;
  activeProjects?: number;
  totalRevenue?: number;
  outstandingBalance?: number;
  lastActivityAt?: Timestamp;

  // Access Control
  members: {
    [userId: string]: 'owner' | 'editor' | 'viewer';
  };
  memberIds: string[];

  // Metadata
  createdAt: Timestamp;
  updatedAt: Timestamp;
  createdBy: string;
}

interface ClientContact {
  id: string;                              // Unique ID for this contact
  name: string;                            // Contact name (required)
  email?: string;                          // Contact email
  phone?: string;                          // Contact phone
  role?: string;                           // Job title/role
  isPrimary: boolean;                      // Is this the main contact
}

type ClientStatus = 'lead' | 'active' | 'inactive';
```

### 2.5.6 UI Components

| Component | Description | Location |
|-----------|-------------|----------|
| ClientListView | Grid/list of all clients | /clients |
| ClientCard | Summary card with key info | /clients, /dashboard |
| ClientDetailPage | Full client page with tabs | /clients/[id] |
| CreateClientDialog | Modal for new client | Global |
| EditClientDialog | Modal for editing client | /clients/[id] |
| ContactList | List of contacts in client | ClientDetailPage |
| ContactForm | Add/edit contact inline | ClientDetailPage |
| ClientFilters | Status filter | /clients |
| ClientProjectsList | Projects for this client | ClientDetailPage |
| ClientInvoicesList | Invoices for this client | ClientDetailPage |

---

## 2.6 Invoicing

### 2.6.1 What It Does
Generates professional invoices from logged time entries and custom line items. Manages invoice lifecycle from draft to paid, tracks outstanding balances, and provides revenue visibility.

### 2.6.2 Why It's Important
- **Cash Flow**: Timely invoicing improves revenue collection
- **Accuracy**: Auto-generated from time entries reduces errors
- **Professionalism**: Consistent, branded invoice format
- **Tracking**: Know what's outstanding, overdue, or paid
- **Financial Visibility**: Real-time revenue and receivables metrics

### 2.6.3 How It Works

#### Invoice Lifecycle

```
[Draft] → [Sent] → [Viewed] → [Paid]
              ↓
          [Overdue]
              ↓
         [Cancelled]
```

| Status | Description | Next Actions |
|--------|-------------|--------------|
| **Draft** | Being prepared, not sent | Edit, Add items, Send, Delete |
| **Sent** | Delivered to client | Mark as Viewed, Mark as Paid |
| **Viewed** | Client has opened invoice | Mark as Paid, Send reminder |
| **Paid** | Payment received | None (terminal) |
| **Overdue** | Past due date, unpaid | Send reminder, Mark as Paid |
| **Cancelled** | Voided invoice | None (terminal) |

#### Invoice Line Items

| Type | Source | Description |
|------|--------|-------------|
| **Time-based** | Time entries | Auto-generated from billable hours |
| **Fixed** | Manual entry | One-time charges (setup fee, etc.) |
| **Milestone** | Milestone | Payment for completed milestone |

### 2.6.4 Functional Requirements

| ID | Requirement | Priority |
|----|-------------|----------|
| INV-001 | User can create a new invoice for a client | High |
| INV-002 | User can add time entries to invoice | High |
| INV-003 | User can add manual line items to invoice | High |
| INV-004 | User can remove line items from invoice | High |
| INV-005 | System auto-calculates subtotal, tax, and total | High |
| INV-006 | User can set tax rate per invoice | High |
| INV-007 | User can set issue date and due date | High |
| INV-008 | User can edit draft invoices | High |
| INV-009 | User can change invoice status | High |
| INV-010 | User can view list of all invoices | High |
| INV-011 | User can filter invoices by status, client, date range | High |
| INV-012 | User can view invoice detail page | High |
| INV-013 | User can download invoice as PDF | High |
| INV-014 | User can add notes to invoice | Medium |
| INV-015 | System auto-generates invoice number | High |
| INV-016 | System marks invoice overdue when past due date | High |
| INV-017 | User can record partial payments | Low |
| INV-018 | User can duplicate an invoice | Low |
| INV-019 | User can void/cancel an invoice | Medium |
| INV-020 | Time entries marked as invoiced when added to invoice | High |

### 2.6.5 Data Model

```typescript
interface Invoice {
  // Identity
  id: string;                              // Firestore document ID
  invoiceNumber: string;                   // Human-readable number (INV-0001)

  // Relationships
  clientId: string;                        // Client being billed
  projectId?: string;                      // Optional: specific project

  // Status
  status: InvoiceStatus;                   // draft | sent | viewed | paid | overdue | cancelled

  // Dates
  issueDate?: Timestamp;                   // Date invoice issued
  dueDate?: Timestamp;                     // Payment due date
  paidAt?: Timestamp;                      // When payment received

  // Line Items
  lineItems: InvoiceLineItem[];            // Array of line items

  // Totals
  subtotal: number;                        // Sum of line items
  taxRate?: number;                        // Tax percentage (0-100)
  tax: number;                             // Calculated tax amount
  total: number;                           // Subtotal + tax

  // Currency
  currency: string;                        // USD, INR, etc.

  // Notes
  notes?: string;                          // Notes to client
  internalNotes?: string;                  // Internal notes

  // Payment Tracking
  amountPaid?: number;                     // For partial payments

  // Access Control
  members: {
    [userId: string]: 'owner' | 'editor' | 'viewer';
  };
  memberIds: string[];

  // Metadata
  createdAt: Timestamp;
  updatedAt: Timestamp;
  createdBy: string;
}

interface InvoiceLineItem {
  id: string;                              // Unique ID for this line
  description: string;                     // Line item description
  quantity: number;                        // Hours or units
  unitPrice: number;                       // Price per unit
  amount: number;                          // quantity × unitPrice
  timeEntryIds?: string[];                 // Source time entries if applicable
}

type InvoiceStatus = 'draft' | 'sent' | 'viewed' | 'paid' | 'overdue' | 'cancelled';
```

### 2.6.6 UI Components

| Component | Description | Location |
|-----------|-------------|----------|
| InvoiceListView | Table of all invoices | /invoices |
| InvoiceCard | Summary card | /invoices, /dashboard |
| InvoiceDetailPage | Full invoice view | /invoices/[id] |
| CreateInvoiceDialog | New invoice creation | /invoices |
| InvoiceLineItemEditor | Add/edit/remove line items | CreateInvoiceDialog, InvoiceDetailPage |
| TimeEntrySelector | Select time entries to invoice | CreateInvoiceDialog |
| InvoiceStatusBadge | Color-coded status | InvoiceListView, InvoiceCard |
| InvoicePDFPreview | PDF preview/download | InvoiceDetailPage |
| InvoiceFilters | Status, client, date filters | /invoices |
| InvoiceTotals | Subtotal, tax, total display | CreateInvoiceDialog, InvoiceDetailPage |

---

## 2.7 Milestones

### 2.7.1 What It Does
Tracks key deliverables and payment checkpoints within projects. Milestones represent significant achievements that can be tied to task completion, client payments, and project progress.

### 2.7.2 Why It's Important
- **Delivery Tracking**: Clear visibility of key deliverables
- **Payment Alignment**: Tie invoicing to milestone completion
- **Progress Measurement**: Objective project progress markers
- **Client Communication**: Clear checkpoints for updates
- **Scope Management**: Defined deliverable boundaries

### 2.7.3 How It Works

#### Milestone Status

| Status | Condition | Visual |
|--------|-----------|--------|
| **Upcoming** | Due date > 7 days from today | Gray |
| **In Progress** | Due date within 7 days | Blue |
| **Completed** | Marked complete | Green |
| **Missed** | Due date passed, not completed | Red |

#### Milestone-Task Relationship

- Tasks can be linked to milestones
- Milestone progress can be calculated from linked task completion
- Completing all linked tasks can auto-trigger milestone review

#### Milestone-Payment Relationship

- Milestones can have associated payment amounts
- Completing milestone can auto-create draft invoice
- Fixed-price projects often use milestone-based billing

### 2.7.4 Functional Requirements

| ID | Requirement | Priority |
|----|-------------|----------|
| MILE-001 | User can create a milestone for a project | High |
| MILE-002 | User can edit milestone details | High |
| MILE-003 | User can delete a milestone | High |
| MILE-004 | User can set milestone due date | High |
| MILE-005 | User can mark milestone as complete | High |
| MILE-006 | User can link tasks to a milestone | Medium |
| MILE-007 | System calculates milestone progress from linked tasks | Medium |
| MILE-008 | User can set payment amount for milestone | Medium |
| MILE-009 | User can view milestones in timeline view | High |
| MILE-010 | User can view milestones in list view | High |
| MILE-011 | System auto-updates milestone status based on due date | High |
| MILE-012 | User can add description/deliverables to milestone | Medium |
| MILE-013 | Completed milestone can generate draft invoice | Low |
| MILE-014 | Dashboard shows upcoming milestones | High |

### 2.7.5 Data Model

```typescript
interface Milestone {
  // Identity
  id: string;                              // Firestore document ID

  // Relationships
  projectId: string;                       // Parent project

  // Core Information
  title: string;                           // Milestone name
  description?: string;                    // Detailed description/deliverables

  // Status
  status: MilestoneStatus;                 // upcoming | in-progress | completed | missed

  // Dates
  dueDate: Timestamp;                      // Target completion date
  completedAt?: Timestamp;                 // Actual completion date

  // Linked Items
  taskIds?: string[];                      // Tasks that contribute to this milestone

  // Payment
  paymentAmount?: number;                  // Payment due at completion
  invoiceId?: string;                      // Generated invoice reference

  // Progress (calculated if tasks linked)
  progressPercentage?: number;             // 0-100

  // Ordering
  order: number;                           // Sequence within project

  // Access Control
  members: {
    [userId: string]: 'owner' | 'editor' | 'viewer';
  };
  memberIds: string[];

  // Metadata
  createdAt: Timestamp;
  updatedAt: Timestamp;
  createdBy: string;
}

type MilestoneStatus = 'upcoming' | 'in-progress' | 'completed' | 'missed';
```

### 2.7.6 UI Components

| Component | Description | Location |
|-----------|-------------|----------|
| MilestoneTimeline | Horizontal timeline view | /projects/[id]/milestones |
| MilestoneList | List view of milestones | /projects/[id]/milestones?view=list |
| MilestoneCard | Milestone summary card | MilestoneTimeline, MilestoneList |
| CreateMilestoneDialog | New milestone form | /projects/[id] |
| EditMilestoneDialog | Edit milestone form | /projects/[id]/milestones |
| MilestoneStatusBadge | Color-coded status | Various |
| MilestoneTaskLinker | UI to link tasks | EditMilestoneDialog |
| UpcomingMilestonesWidget | Dashboard widget | /dashboard |

---

## 2.8 Dashboard & Reporting

### 2.8.1 What It Does
Provides a centralized overview of business health, project status, and team productivity. Includes real-time metrics, upcoming deadlines, and at-a-glance indicators for proactive management.

### 2.8.2 Why It's Important
- **Business Visibility**: Understand agency health at a glance
- **Proactive Management**: Identify issues before they escalate
- **Decision Support**: Data-driven resource allocation
- **Goal Tracking**: Monitor progress toward targets
- **Time Savings**: No need to compile reports manually

### 2.8.3 How It Works

#### Dashboard Sections

1. **Summary Cards**: Key metrics in card format
2. **Project Health Overview**: Visual status of all active projects
3. **Upcoming Deadlines**: Tasks and milestones due soon
4. **Recent Activity**: Latest actions across the system
5. **Time Stats**: Weekly/monthly time tracking summary

#### Key Metrics

| Metric | Calculation | Update Frequency |
|--------|-------------|------------------|
| Active Projects | Count where status = 'active' | Real-time |
| Projects at Risk | Count where health = 'at-risk' or 'behind' | Real-time |
| Active Clients | Count where status = 'active' | Real-time |
| Hours This Week | Sum of time entries this week | Real-time |
| Billable Hours | Sum of billable time entries | Real-time |
| Utilization Rate | Billable hours / Total hours × 100 | Real-time |
| Revenue This Month | Sum of paid invoices this month | Real-time |
| Pending Revenue | Sum of sent/overdue invoices | Real-time |
| Overdue Invoices | Count where status = 'overdue' | Real-time |
| Tasks Completed Today | Tasks moved to 'Done' today | Real-time |
| Tasks Overdue | Tasks past due date, not done | Real-time |

### 2.8.4 Functional Requirements

| ID | Requirement | Priority |
|----|-------------|----------|
| DASH-001 | Dashboard shows summary metric cards | High |
| DASH-002 | Dashboard shows active project cards with health | High |
| DASH-003 | Dashboard shows upcoming deadlines (7 days) | High |
| DASH-004 | Dashboard shows overdue tasks list | High |
| DASH-005 | Dashboard shows upcoming milestones | High |
| DASH-006 | Dashboard shows recent activity feed | Medium |
| DASH-007 | Dashboard shows weekly time summary | High |
| DASH-008 | User can filter dashboard by date range | Medium |
| DASH-009 | User can customize which widgets to show | Low |
| DASH-010 | Dashboard refreshes in real-time | High |
| RPT-001 | User can view time report by project | High |
| RPT-002 | User can view time report by team member | High |
| RPT-003 | User can view time report by date range | High |
| RPT-004 | User can view project status report | High |
| RPT-005 | User can view client profitability report | Medium |
| RPT-006 | User can export reports to CSV | Medium |
| RPT-007 | User can export reports to PDF | Low |

### 2.8.5 UI Components

| Component | Description | Location |
|-----------|-------------|----------|
| DashboardPage | Main dashboard layout | /dashboard |
| MetricCard | Single metric with trend | DashboardPage |
| ProjectHealthGrid | Grid of project cards with health | DashboardPage |
| UpcomingDeadlinesList | List of upcoming task/milestone due dates | DashboardPage |
| OverdueTasksList | List of overdue tasks | DashboardPage |
| UpcomingMilestonesWidget | Next 7 days milestones | DashboardPage |
| ActivityFeed | Recent activity stream | DashboardPage |
| WeeklyTimeChart | Bar chart of hours by day | DashboardPage |
| TimeReportPage | Time analysis with filters | /reports/time |
| ProjectReportPage | Project status report | /reports/projects |
| ExportButton | CSV/PDF export trigger | Report pages |

---

## 2.9 Notifications

### 2.9.1 What It Does
Delivers timely alerts about important events: approaching deadlines, task assignments, invoice status changes, and mentions. Notifications appear in-app and can be extended to email.

### 2.9.2 Why It's Important
- **Timely Awareness**: Know about important events immediately
- **Reduced Missed Deadlines**: Proactive deadline reminders
- **Team Communication**: Notify on assignments and mentions
- **Action Triggers**: Prompt users to take required actions

### 2.9.3 Notification Types

| Type | Trigger | Priority |
|------|---------|----------|
| **Task Assigned** | User assigned to task | Medium |
| **Task Due Soon** | Task due in 24 hours | High |
| **Task Overdue** | Task past due date | High |
| **Project Deadline** | Project end date in 7 days | High |
| **Milestone Due** | Milestone due in 3 days | High |
| **Invoice Paid** | Invoice marked as paid | Low |
| **Invoice Overdue** | Invoice past due date | High |
| **Mention** | User mentioned in comment | Medium |

### 2.9.4 Functional Requirements

| ID | Requirement | Priority |
|----|-------------|----------|
| NOTIF-001 | User receives notification when assigned to task | High |
| NOTIF-002 | User receives notification when task is due soon | High |
| NOTIF-003 | User receives notification when task is overdue | High |
| NOTIF-004 | User sees notification count badge in header | High |
| NOTIF-005 | User can view list of all notifications | High |
| NOTIF-006 | User can mark notification as read | High |
| NOTIF-007 | User can mark all notifications as read | High |
| NOTIF-008 | Clicking notification navigates to relevant item | High |
| NOTIF-009 | Notifications appear in real-time | High |
| NOTIF-010 | User can configure notification preferences | Low |

### 2.9.5 Data Model

```typescript
interface Notification {
  // Identity
  id: string;

  // Target
  userId: string;                          // Who receives this

  // Content
  type: NotificationType;
  title: string;
  message: string;

  // Navigation
  link?: string;                           // URL to navigate on click

  // Status
  read: boolean;

  // Metadata
  createdAt: Timestamp;
}

type NotificationType =
  | 'task_assigned'
  | 'task_due'
  | 'task_overdue'
  | 'project_deadline'
  | 'milestone_due'
  | 'invoice_paid'
  | 'invoice_overdue'
  | 'mention';
```

---

# 3. User Experience

## 3.1 User Personas

### 3.1.1 Primary Persona: Agency Owner (Jitin)

**Demographics**
- Age: 28-35
- Role: Founder/Principal of GlitchZero Labs
- Technical Background: Full-stack developer
- Experience: 5-10 years in software development

**Goals**
- Maximize team utilization and profitability
- Identify at-risk projects before they become problems
- Spend less time on administrative tasks
- Make data-driven decisions about resource allocation
- Maintain healthy cash flow through timely invoicing

**Pain Points**
- Currently using spreadsheets for tracking, too manual
- Doesn't know true project profitability
- Invoicing takes too long, delays cash flow
- Can't easily see who is overloaded or underutilized
- Misses deadlines because issues aren't visible early

**Success Criteria**
- Can understand business health in 30 seconds from dashboard
- Invoice creation takes <5 minutes
- Never surprised by project issues (visible before escalation)
- Knows exact utilization rate per team member

### 3.1.2 Secondary Persona: Project Manager (Priya)

**Demographics**
- Age: 25-32
- Role: Project Manager / Senior Developer
- Technical Background: Frontend developer
- Experience: 3-6 years

**Goals**
- Deliver projects on time and within budget
- Keep tasks organized and prioritized
- Communicate project status efficiently
- Prevent team overload
- Track time accurately for billing

**Pain Points**
- Task status scattered across tools
- Hard to see project progress at a glance
- Manually compiling status reports wastes time
- Doesn't know if timeline is realistic until too late
- Forgetting to log time accurately

**Success Criteria**
- Can see project health status instantly
- Kanban board accurately reflects work state
- Never misses a task deadline unknowingly
- Status reports can be generated automatically

### 3.1.3 Tertiary Persona: Developer (Rahul)

**Demographics**
- Age: 22-28
- Role: Junior/Mid Developer
- Technical Background: React/Next.js developer
- Experience: 1-4 years

**Goals**
- Know exactly what to work on next
- Track time without disrupting flow
- Update task status easily
- See how work contributes to project
- Get clear task specifications

**Pain Points**
- Too many task lists in different places
- Forgetting to start/stop timer
- Unclear task priorities
- Not knowing about task dependencies
- Context switching between tools

**Success Criteria**
- Single source of truth for tasks
- Time tracking is effortless (one click)
- Priority is visually obvious
- Can see full task context without asking

---

## 3.2 Key User Flows

### 3.2.1 Flow: Start Work Session

**Actors**: Developer, Project Manager
**Goal**: Begin tracking time on a task

**Steps**:
1. User opens GlitchZero Dock
2. User views dashboard with assigned tasks
3. User clicks on a task card
4. Task detail panel slides out
5. User reviews task details
6. User clicks "Start Timer" button
7. Timer appears in header, counting
8. User works on task
9. User clicks "Stop Timer" when done
10. Time entry is saved with task association

**Alternate Flows**:
- A1: User starts timer without task (associates project only)
- A2: User creates manual time entry for past work

### 3.2.2 Flow: Create New Project

**Actors**: Agency Owner, Project Manager
**Goal**: Set up a new client project

**Steps**:
1. User clicks "New Project" button in header
2. Create Project dialog opens
3. User enters project name
4. User selects or creates client
5. User enters description
6. User sets start and end dates
7. User selects project type
8. User sets billing type and rate/budget
9. User adds team members with roles
10. User clicks "Create Project"
11. Project is created, user redirected to project page

**Validation**:
- Name is required (min 3 characters)
- Start date must be before end date
- At least one team member required

### 3.2.3 Flow: Generate Invoice from Time

**Actors**: Agency Owner, Project Manager
**Goal**: Create invoice from logged billable hours

**Steps**:
1. User navigates to Invoices page
2. User clicks "Create Invoice"
3. User selects client from dropdown
4. System shows uninvoiced time entries for client
5. User selects time entries to include
6. System calculates line items from time entries
7. User optionally adds manual line items
8. User reviews subtotal, adds tax rate
9. User sets issue date and due date
10. User clicks "Create as Draft"
11. User reviews draft invoice
12. User clicks "Send Invoice"
13. Invoice status changes to Sent
14. Time entries marked as invoiced

### 3.2.4 Flow: Review Project Health

**Actors**: Agency Owner, Project Manager
**Goal**: Assess health of active projects

**Steps**:
1. User opens dashboard
2. User views Project Health section
3. User sees color-coded health indicators
4. User identifies project with "At Risk" status
5. User clicks on project card
6. User views project detail page
7. User sees breakdown: timeline, budget, tasks
8. User identifies issue (e.g., over budget)
9. User takes corrective action (reassign, discuss)

### 3.2.5 Flow: Update Task Status

**Actors**: Developer, Project Manager
**Goal**: Move task through workflow

**Steps**:
1. User navigates to project's task board
2. User sees Kanban board with columns
3. User finds task in "To Do" column
4. User drags task to "In Progress" column
5. System updates task status
6. Task appears in new column
7. (Later) User drags task to "Done"
8. System updates status and sets completedAt

**Alternate Flows**:
- A1: User opens task detail, changes status via dropdown
- A2: User with mobile uses list view, taps to change status

---

## 3.3 Information Architecture

### 3.3.1 Navigation Structure

```
├── Dashboard
│   ├── Overview Metrics
│   ├── Project Health
│   ├── Upcoming Deadlines
│   └── Recent Activity
│
├── Projects
│   ├── All Projects (list/grid)
│   └── [Project Detail]
│       ├── Overview
│       ├── Tasks (Kanban/List)
│       ├── Milestones
│       ├── Time Entries
│       └── Settings
│
├── Tasks
│   └── My Tasks (across all projects)
│
├── Time
│   ├── Tracker (current day)
│   ├── Timesheet (weekly view)
│   └── Reports
│
├── Clients
│   ├── All Clients
│   └── [Client Detail]
│       ├── Overview
│       ├── Projects
│       ├── Invoices
│       └── Contacts
│
├── Invoices
│   ├── All Invoices
│   └── [Invoice Detail]
│
└── Settings
    ├── Profile
    ├── Team Members
    └── Preferences
```

### 3.3.2 Global Actions

Available from any page via header:
- New Project
- New Task (context-aware)
- New Client
- New Invoice
- Start Timer
- Search (Cmd+K)
- Notifications
- User Menu

---

## 3.4 Design Principles

### 3.4.1 Visual Design

| Principle | Implementation |
|-----------|----------------|
| **Clean & Professional** | Minimal UI, ample whitespace, professional color palette |
| **Data-Dense but Scannable** | Show key info upfront, details on demand |
| **Consistent Visual Language** | Same components, colors, and patterns throughout |
| **Status at a Glance** | Color-coded badges, progress bars, health indicators |
| **Responsive** | Works on desktop (primary), tablet, and mobile |

### 3.4.2 Interaction Design

| Principle | Implementation |
|-----------|----------------|
| **Immediate Feedback** | Actions reflect instantly (optimistic updates) |
| **Minimal Clicks** | Common actions within 2 clicks |
| **Keyboard-Friendly** | Power users can navigate without mouse |
| **Contextual Actions** | Right actions in right context (no hunting) |
| **Forgiving** | Undo support, confirmation for destructive actions |

### 3.4.3 Performance Targets

| Metric | Target |
|--------|--------|
| Initial Page Load | < 2 seconds |
| Subsequent Navigation | < 500ms |
| Interaction Response | < 100ms |
| Data Refresh | Real-time (Firebase listeners) |

---

</context>

<PRD>

# 4. Technical Architecture

## 4.1 System Overview

### 4.1.1 Architecture Pattern

GlitchZero Dock follows a **serverless, real-time architecture** leveraging Firebase services:

```
┌─────────────────────────────────────────────────────────────┐
│                      Client Layer                           │
│  ┌──────────────────────────────────────────────────────┐  │
│  │           Next.js 14 (App Router)                     │  │
│  │  ┌─────────┐ ┌─────────┐ ┌─────────┐ ┌─────────────┐ │  │
│  │  │  React  │ │ Tailwind│ │shadcn/ui│ │ TypeScript  │ │  │
│  │  │   18    │ │   CSS   │ │         │ │             │ │  │
│  │  └─────────┘ └─────────┘ └─────────┘ └─────────────┘ │  │
│  └──────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│                    Firebase Services                         │
│  ┌───────────┐ ┌───────────┐ ┌───────────┐ ┌────────────┐  │
│  │   Auth    │ │ Firestore │ │  Storage  │ │  Functions │  │
│  │           │ │           │ │           │ │ (optional) │  │
│  └───────────┘ └───────────┘ └───────────┘ └────────────┘  │
└─────────────────────────────────────────────────────────────┘
```

### 4.1.2 Technology Stack

| Layer | Technology | Version | Purpose |
|-------|------------|---------|---------|
| **Framework** | Next.js | 14.x | React meta-framework with App Router |
| **Runtime** | React | 18.x | UI component library |
| **Language** | TypeScript | 5.x | Type-safe JavaScript |
| **Styling** | Tailwind CSS | 3.x | Utility-first CSS framework |
| **Components** | shadcn/ui | Latest | Accessible component primitives |
| **Auth** | Firebase Auth | 10.x | Authentication service |
| **Database** | Cloud Firestore | 10.x | NoSQL document database |
| **Storage** | Firebase Storage | 10.x | File storage (logos, attachments) |
| **Hosting** | Vercel | - | Next.js deployment platform |
| **State** | React Context + Hooks | - | Client-side state management |
| **Forms** | React Hook Form | 7.x | Form state management |
| **Validation** | Zod | 3.x | Schema validation |
| **Icons** | Lucide React | Latest | Icon library |
| **Date** | date-fns | 2.x | Date manipulation |
| **PDF** | @react-pdf/renderer | 3.x | Invoice PDF generation |
| **DnD** | @dnd-kit | Latest | Drag and drop for Kanban |
| **Charts** | Recharts | 2.x | Dashboard charts |

### 4.1.3 Key Architectural Decisions

| Decision | Choice | Rationale |
|----------|--------|-----------|
| Serverless Backend | Firebase | No server management, real-time by default, generous free tier |
| NoSQL Database | Firestore | Flexible schema, real-time listeners, offline support |
| App Router | Next.js 14 | Server components, layouts, improved data fetching |
| Component Library | shadcn/ui | Customizable, accessible, no vendor lock-in |
| Styling | Tailwind | Rapid development, consistent design, small bundle |
| No Redux | Context + Hooks | Simpler for this scale, Firebase handles sync |

---

## 4.2 Data Architecture

### 4.2.1 Firestore Collection Structure

```
firestore/
├── users/
│   └── {userId}
│       └── notifications/
│           └── {notificationId}
│
├── projects/
│   └── {projectId}
│       ├── tasks/
│       │   └── {taskId}
│       ├── milestones/
│       │   └── {milestoneId}
│       └── timeEntries/
│           └── {timeEntryId}
│
├── clients/
│   └── {clientId}
│
├── invoices/
│   └── {invoiceId}
│
└── settings/
    └── {documentId}
```

### 4.2.2 Collection Descriptions

| Collection | Subcollection Of | Purpose | Access Pattern |
|------------|------------------|---------|----------------|
| `users` | Root | User profiles | By auth UID |
| `notifications` | users | User notifications | By userId, createdAt desc |
| `projects` | Root | All projects | By memberIds array-contains |
| `tasks` | projects | Project tasks | By projectId, status |
| `milestones` | projects | Project milestones | By projectId, order |
| `timeEntries` | projects | Time logged | By projectId, userId, date range |
| `clients` | Root | Client records | By memberIds array-contains |
| `invoices` | Root | All invoices | By clientId, status |
| `settings` | Root | App settings | By document ID |

### 4.2.3 Indexing Strategy

**Composite Indexes Required**:

```
projects:
  - memberIds (array-contains) + status + createdAt (desc)
  - memberIds (array-contains) + clientId + status

tasks:
  - projectId + status + order
  - projectId + assignedTo + status
  - memberIds (array-contains) + status + dueDate

timeEntries:
  - projectId + userId + startTime (desc)
  - projectId + isBillable + invoiceId
  - userId + startTime (desc)

invoices:
  - clientId + status + issueDate (desc)
  - memberIds (array-contains) + status

milestones:
  - projectId + order
  - projectId + status + dueDate
```

### 4.2.4 Data Denormalization Strategy

To optimize read performance, certain data is denormalized:

| Parent | Denormalized Fields | Source | Update Trigger |
|--------|---------------------|--------|----------------|
| Project | totalTasks, completedTasks | tasks subcollection | Task create/update/delete |
| Project | totalLoggedHours | timeEntries subcollection | TimeEntry create/update/delete |
| Project | healthScore, healthStatus | Calculated | Nightly or on-demand |
| Task | loggedHours | timeEntries | TimeEntry create/update/delete |
| Client | totalProjects, activeProjects | projects collection | Project create/update |
| Client | totalRevenue, outstandingBalance | invoices collection | Invoice update |
| Milestone | progressPercentage | linked tasks | Task status change |

### 4.2.5 Security Rules Pattern

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {

    // Helper functions
    function isSignedIn() {
      return request.auth != null;
    }

    function isOwner(resource) {
      return request.auth.uid in resource.data.members
        && resource.data.members[request.auth.uid] == 'owner';
    }

    function isMember(resource) {
      return request.auth.uid in resource.data.members;
    }

    function isEditorOrAbove(resource) {
      return isMember(resource)
        && resource.data.members[request.auth.uid] in ['owner', 'editor'];
    }

    // Users - own profile only
    match /users/{userId} {
      allow read: if isSignedIn();
      allow write: if request.auth.uid == userId;

      match /notifications/{notificationId} {
        allow read, write: if request.auth.uid == userId;
      }
    }

    // Projects - member-based access
    match /projects/{projectId} {
      allow read: if isSignedIn() && isMember(resource);
      allow create: if isSignedIn();
      allow update: if isEditorOrAbove(resource);
      allow delete: if isOwner(resource);

      // Tasks inherit project access
      match /tasks/{taskId} {
        allow read: if isSignedIn() && isMember(get(/databases/$(database)/documents/projects/$(projectId)));
        allow create, update: if isEditorOrAbove(get(/databases/$(database)/documents/projects/$(projectId)));
        allow delete: if isOwner(get(/databases/$(database)/documents/projects/$(projectId)));
      }

      // Time entries - own entries for users, all for editors
      match /timeEntries/{entryId} {
        allow read: if isSignedIn() && isMember(get(/databases/$(database)/documents/projects/$(projectId)));
        allow create: if isSignedIn() && isMember(get(/databases/$(database)/documents/projects/$(projectId)));
        allow update, delete: if isSignedIn()
          && (resource.data.userId == request.auth.uid
              || isEditorOrAbove(get(/databases/$(database)/documents/projects/$(projectId))));
      }

      // Milestones - same as tasks
      match /milestones/{milestoneId} {
        allow read: if isSignedIn() && isMember(get(/databases/$(database)/documents/projects/$(projectId)));
        allow create, update: if isEditorOrAbove(get(/databases/$(database)/documents/projects/$(projectId)));
        allow delete: if isOwner(get(/databases/$(database)/documents/projects/$(projectId)));
      }
    }

    // Clients - member-based access
    match /clients/{clientId} {
      allow read: if isSignedIn() && isMember(resource);
      allow create: if isSignedIn();
      allow update: if isEditorOrAbove(resource);
      allow delete: if isOwner(resource);
    }

    // Invoices - member-based access
    match /invoices/{invoiceId} {
      allow read: if isSignedIn() && isMember(resource);
      allow create: if isSignedIn();
      allow update: if isEditorOrAbove(resource);
      allow delete: if isOwner(resource);
    }
  }
}
```

---

## 4.3 Frontend Architecture

### 4.3.1 Directory Structure

```
src/
├── app/                          # Next.js App Router pages
│   ├── (auth)/                   # Auth routes group
│   │   ├── sign-in/
│   │   └── sign-up/
│   ├── dashboard/
│   ├── projects/
│   │   ├── [id]/
│   │   │   ├── tasks/
│   │   │   ├── milestones/
│   │   │   └── settings/
│   │   └── page.tsx
│   ├── clients/
│   │   └── [id]/
│   ├── invoices/
│   │   └── [id]/
│   ├── time/
│   ├── reports/
│   ├── settings/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
│
├── components/
│   ├── ui/                       # shadcn/ui primitives
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── dialog.tsx
│   │   └── ...
│   ├── layout/                   # Layout components
│   │   ├── app-header.tsx
│   │   ├── main-sidebar.tsx
│   │   └── user-nav.tsx
│   ├── projects/                 # Project components
│   │   ├── project-card.tsx
│   │   ├── project-list.tsx
│   │   ├── project-form.tsx
│   │   └── project-health.tsx
│   ├── tasks/                    # Task components
│   │   ├── kanban-board.tsx
│   │   ├── kanban-column.tsx
│   │   ├── task-card.tsx
│   │   ├── task-detail.tsx
│   │   └── task-form.tsx
│   ├── clients/
│   ├── invoices/
│   ├── time/
│   ├── milestones/
│   ├── dashboard/
│   └── shared/                   # Shared components
│       ├── status-badge.tsx
│       ├── priority-badge.tsx
│       ├── avatar.tsx
│       └── date-picker.tsx
│
├── hooks/                        # Custom React hooks
│   ├── use-auth.ts
│   ├── use-projects.ts
│   ├── use-tasks.ts
│   ├── use-clients.ts
│   ├── use-invoices.ts
│   ├── use-time-entries.ts
│   ├── use-milestones.ts
│   └── use-notifications.ts
│
├── lib/                          # Utility functions
│   ├── firebase/
│   │   ├── config.ts
│   │   ├── auth.ts
│   │   └── firestore.ts
│   ├── utils.ts
│   ├── types.ts
│   ├── constants.ts
│   └── validations.ts
│
├── contexts/                     # React contexts
│   ├── auth-context.tsx
│   └── timer-context.tsx
│
└── styles/                       # Additional styles
    └── ...
```

### 4.3.2 State Management Strategy

| State Type | Solution | Scope |
|------------|----------|-------|
| **Auth State** | AuthContext + Firebase Auth | Global |
| **Server Data** | Custom hooks with Firestore listeners | Component subtree |
| **Timer State** | TimerContext | Global |
| **Form State** | React Hook Form | Component |
| **UI State** | useState/useReducer | Component |
| **URL State** | Next.js searchParams | Page |

### 4.3.3 Data Fetching Pattern

```typescript
// Custom hook pattern for Firestore collections
function useProjects() {
  const { user } = useAuth();
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (!user) return;

    const q = query(
      collection(db, 'projects'),
      where('memberIds', 'array-contains', user.uid),
      orderBy('createdAt', 'desc')
    );

    const unsubscribe = onSnapshot(q,
      (snapshot) => {
        const data = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        })) as Project[];
        setProjects(data);
        setLoading(false);
      },
      (err) => {
        setError(err);
        setLoading(false);
      }
    );

    return () => unsubscribe();
  }, [user]);

  return { projects, loading, error };
}
```

### 4.3.4 Component Patterns

**Page Component Pattern**:
```typescript
// app/projects/page.tsx
export default async function ProjectsPage() {
  return (
    <div className="container py-6">
      <PageHeader
        title="Projects"
        action={<CreateProjectButton />}
      />
      <ProjectFilters />
      <Suspense fallback={<ProjectListSkeleton />}>
        <ProjectList />
      </Suspense>
    </div>
  );
}
```

**Feature Component Pattern**:
```typescript
// components/projects/project-card.tsx
interface ProjectCardProps {
  project: Project;
  onClick?: () => void;
}

export function ProjectCard({ project, onClick }: ProjectCardProps) {
  return (
    <Card className="cursor-pointer hover:shadow-md" onClick={onClick}>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>{project.name}</CardTitle>
          <ProjectHealthBadge health={project.healthStatus} />
        </div>
      </CardHeader>
      <CardContent>
        <ProjectProgress value={project.progressPercentage} />
        <ProjectMeta project={project} />
      </CardContent>
    </Card>
  );
}
```

---

## 4.4 API Design

### 4.4.1 Firestore Operations

Since we're using Firestore directly (no REST API layer), operations are performed through the Firebase SDK:

**Create Operations**:
```typescript
// Create project
async function createProject(data: CreateProjectInput): Promise<string> {
  const user = auth.currentUser;
  if (!user) throw new Error('Not authenticated');

  const projectRef = doc(collection(db, 'projects'));

  await setDoc(projectRef, {
    ...data,
    members: { [user.uid]: 'owner' },
    memberIds: [user.uid],
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
    createdBy: user.uid,
  });

  return projectRef.id;
}
```

**Read Operations**:
```typescript
// Get project by ID
async function getProject(projectId: string): Promise<Project | null> {
  const docRef = doc(db, 'projects', projectId);
  const docSnap = await getDoc(docRef);

  if (!docSnap.exists()) return null;

  return { id: docSnap.id, ...docSnap.data() } as Project;
}

// Real-time listener for tasks
function subscribeToTasks(
  projectId: string,
  callback: (tasks: Task[]) => void
): () => void {
  const q = query(
    collection(db, 'projects', projectId, 'tasks'),
    orderBy('order')
  );

  return onSnapshot(q, (snapshot) => {
    const tasks = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    })) as Task[];
    callback(tasks);
  });
}
```

**Update Operations**:
```typescript
// Update task status
async function updateTaskStatus(
  projectId: string,
  taskId: string,
  status: TaskStatus
): Promise<void> {
  const taskRef = doc(db, 'projects', projectId, 'tasks', taskId);

  await updateDoc(taskRef, {
    status,
    updatedAt: serverTimestamp(),
    ...(status === 'Done' ? { completedAt: serverTimestamp() } : {}),
  });
}
```

**Delete Operations**:
```typescript
// Delete task
async function deleteTask(projectId: string, taskId: string): Promise<void> {
  const taskRef = doc(db, 'projects', projectId, 'tasks', taskId);
  await deleteDoc(taskRef);
}
```

### 4.4.2 Batch Operations

For operations affecting multiple documents:

```typescript
// Bulk update task status
async function bulkUpdateTaskStatus(
  projectId: string,
  taskIds: string[],
  status: TaskStatus
): Promise<void> {
  const batch = writeBatch(db);

  for (const taskId of taskIds) {
    const taskRef = doc(db, 'projects', projectId, 'tasks', taskId);
    batch.update(taskRef, {
      status,
      updatedAt: serverTimestamp(),
    });
  }

  await batch.commit();
}
```

### 4.4.3 Transaction Operations

For operations requiring atomicity:

```typescript
// Add time entry and update task hours
async function addTimeEntry(
  projectId: string,
  taskId: string,
  duration: number
): Promise<string> {
  return await runTransaction(db, async (transaction) => {
    // Read current task
    const taskRef = doc(db, 'projects', projectId, 'tasks', taskId);
    const taskDoc = await transaction.get(taskRef);

    if (!taskDoc.exists()) {
      throw new Error('Task not found');
    }

    const currentHours = taskDoc.data().loggedHours || 0;

    // Create time entry
    const entryRef = doc(collection(db, 'projects', projectId, 'timeEntries'));
    transaction.set(entryRef, {
      taskId,
      projectId,
      duration,
      // ... other fields
    });

    // Update task hours
    transaction.update(taskRef, {
      loggedHours: currentHours + (duration / 60),
      updatedAt: serverTimestamp(),
    });

    return entryRef.id;
  });
}
```

---

## 4.5 Integration Points

### 4.5.1 Firebase Services Integration

| Service | Integration Method | Purpose |
|---------|-------------------|---------|
| **Firebase Auth** | Client SDK | User authentication |
| **Cloud Firestore** | Client SDK + Real-time listeners | Data storage and sync |
| **Firebase Storage** | Client SDK | Logo/attachment storage |
| **Cloud Functions** | HTTP triggers (optional) | Background processing |

### 4.5.2 External Integrations (Future)

| Integration | Purpose | Phase |
|-------------|---------|-------|
| Stripe | Payment collection | Future |
| Gmail API | Email invoice sending | Future |
| Calendar | Deadline sync | Future |
| Slack | Notifications | Future |

---

## 4.6 Performance Considerations

### 4.6.1 Optimization Strategies

| Strategy | Implementation | Impact |
|----------|----------------|--------|
| **Real-time Listeners** | Firestore onSnapshot | Instant updates without polling |
| **Pagination** | Limit + startAfter queries | Handle large datasets |
| **Denormalization** | Store computed fields | Reduce read-time calculations |
| **Optimistic Updates** | Update UI before server | Instant perceived performance |
| **Code Splitting** | Next.js dynamic imports | Smaller initial bundle |
| **Image Optimization** | Next.js Image component | Lazy loading, responsive |
| **Skeleton Loading** | Suspense boundaries | Perceived performance |

### 4.6.2 Firestore Read Optimization

```typescript
// Limit fields with select (not available in client SDK, use projection in queries)
// Use collection group queries for cross-collection reads
// Cache frequently accessed data locally

const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes
const cache = new Map<string, { data: any; timestamp: number }>();

function getCached<T>(key: string): T | null {
  const entry = cache.get(key);
  if (!entry) return null;
  if (Date.now() - entry.timestamp > CACHE_DURATION) {
    cache.delete(key);
    return null;
  }
  return entry.data as T;
}

function setCache(key: string, data: any): void {
  cache.set(key, { data, timestamp: Date.now() });
}
```

### 4.6.3 Bundle Size Optimization

| Technique | Target |
|-----------|--------|
| Dynamic imports for dialogs | Load only when needed |
| Tree shaking for icons | Import specific icons only |
| Lazy load charts | Load Recharts on dashboard only |
| Minimize dependencies | Audit regularly with bundlephobia |

---

## 4.7 Scalability Considerations

### 4.7.1 Firestore Limits

| Limit | Value | Mitigation |
|-------|-------|------------|
| Document size | 1 MB | Split large data across subcollections |
| Write rate per doc | 1 write/second | Distribute writes, avoid hotspots |
| Concurrent connections | 1 million | More than sufficient for internal tool |
| Query results | 10 MB | Paginate large result sets |

### 4.7.2 Growth Projections

| Metric | Year 1 | Year 3 | Design Capacity |
|--------|--------|--------|-----------------|
| Users | 10-20 | 30-50 | 100 |
| Projects | 50-100 | 200-500 | 10,000 |
| Tasks | 500-2,000 | 5,000-20,000 | 1,000,000 |
| Time Entries | 5,000-20,000 | 50,000-200,000 | 10,000,000 |

### 4.7.3 Cost Projections (Firebase)

| Tier | Reads/month | Writes/month | Est. Cost |
|------|-------------|--------------|-----------|
| **Free (Spark)** | 50,000 | 20,000 | $0 |
| **Year 1** | 500,000 | 100,000 | ~$25/mo |
| **Year 3** | 2,000,000 | 500,000 | ~$100/mo |

---

# 5. Development Roadmap

## 5.1 Phase Overview

| Phase | Focus | Key Deliverables |
|-------|-------|------------------|
| **Phase 1** | Foundation + Core MVP | Auth, Projects, Tasks (Kanban), Clients, Time Tracking, Basic Invoicing, Dashboard |
| **Phase 2** | Enhanced Features | Project Health, Milestones, Time Reports, Task Priority/Labels, Subtasks |
| **Phase 3** | Reporting & Analytics | Advanced Reports, Workload View, Export, Dashboard Enhancements |
| **Phase 4** | Polish & Optimization | Keyboard Shortcuts, Search, Templates, Performance, Mobile Polish |

---

## 5.2 Phase 1: Foundation + Core MVP

### 5.2.1 Objectives
- Establish project foundation with Next.js 14 and Firebase
- Implement core authentication and authorization
- Build essential CRUD operations for all primary entities
- Deliver a usable MVP for internal project tracking

### 5.2.2 Deliverables

#### Foundation
| Task | Description | Dependencies |
|------|-------------|--------------|
| F1.1 | Initialize Next.js 14 project with TypeScript, Tailwind | None |
| F1.2 | Configure Firebase project (Auth, Firestore, Storage) | F1.1 |
| F1.3 | Set up shadcn/ui component library | F1.1 |
| F1.4 | Create project directory structure | F1.1 |
| F1.5 | Implement base layout (sidebar, header) | F1.3 |
| F1.6 | Configure ESLint, Prettier, and Git hooks | F1.1 |

#### Authentication
| Task | Description | Dependencies |
|------|-------------|--------------|
| A1.1 | Implement Firebase Auth configuration | F1.2 |
| A1.2 | Create AuthContext and useAuth hook | A1.1 |
| A1.3 | Build sign-in page with email/password form | A1.2, F1.3 |
| A1.4 | Build sign-up page with validation | A1.2, F1.3 |
| A1.5 | Implement password reset flow | A1.2 |
| A1.6 | Create protected route wrapper | A1.2 |
| A1.7 | Add user profile management | A1.2, F1.3 |
| A1.8 | Implement sign-out functionality | A1.2 |

#### Projects
| Task | Description | Dependencies |
|------|-------------|--------------|
| P1.1 | Define Project TypeScript types | F1.4 |
| P1.2 | Create Firestore security rules for projects | F1.2 |
| P1.3 | Implement useProjects hook with real-time listener | A1.2, P1.1 |
| P1.4 | Build ProjectCard component | F1.3, P1.1 |
| P1.5 | Build ProjectList view (grid layout) | P1.4 |
| P1.6 | Build CreateProjectDialog form | F1.3, P1.1 |
| P1.7 | Implement project creation logic | P1.6, P1.3 |
| P1.8 | Build project detail page layout | F1.5, P1.3 |
| P1.9 | Implement project edit functionality | P1.8 |
| P1.10 | Implement project deletion with confirmation | P1.8 |
| P1.11 | Add member management to projects | P1.8 |

#### Tasks
| Task | Description | Dependencies |
|------|-------------|--------------|
| T1.1 | Define Task TypeScript types | F1.4 |
| T1.2 | Create Firestore security rules for tasks | F1.2 |
| T1.3 | Implement useTasks hook with real-time listener | P1.3, T1.1 |
| T1.4 | Build KanbanBoard component layout | F1.3 |
| T1.5 | Build KanbanColumn component | T1.4 |
| T1.6 | Build TaskCard component | T1.5, T1.1 |
| T1.7 | Implement drag-and-drop with @dnd-kit | T1.4, T1.5 |
| T1.8 | Build CreateTaskDialog form | F1.3, T1.1 |
| T1.9 | Implement task creation logic | T1.8, T1.3 |
| T1.10 | Build TaskDetailPanel (slide-out) | T1.6 |
| T1.11 | Implement task editing | T1.10 |
| T1.12 | Implement task status change on drag | T1.7, T1.3 |
| T1.13 | Implement task deletion | T1.10 |
| T1.14 | Add task reordering within columns | T1.7 |

#### Clients
| Task | Description | Dependencies |
|------|-------------|--------------|
| C1.1 | Define Client TypeScript types | F1.4 |
| C1.2 | Create Firestore security rules for clients | F1.2 |
| C1.3 | Implement useClients hook | A1.2, C1.1 |
| C1.4 | Build ClientCard component | F1.3, C1.1 |
| C1.5 | Build ClientList view | C1.4 |
| C1.6 | Build CreateClientDialog form | F1.3, C1.1 |
| C1.7 | Implement client creation logic | C1.6, C1.3 |
| C1.8 | Build client detail page | F1.5, C1.3 |
| C1.9 | Implement contact management | C1.8 |
| C1.10 | Implement client edit/delete | C1.8 |
| C1.11 | Link clients to project dropdown | P1.6, C1.3 |

#### Time Tracking
| Task | Description | Dependencies |
|------|-------------|--------------|
| TT1.1 | Define TimeEntry TypeScript types | F1.4 |
| TT1.2 | Create Firestore security rules for time entries | F1.2 |
| TT1.3 | Create TimerContext for global timer state | F1.4 |
| TT1.4 | Build GlobalTimer component in header | F1.5, TT1.3 |
| TT1.5 | Implement start/stop timer logic | TT1.3, TT1.1 |
| TT1.6 | Implement useTimeEntries hook | A1.2, TT1.1 |
| TT1.7 | Build TimeTracker page layout | F1.5 |
| TT1.8 | Build WeeklyTimesheet component | TT1.7, TT1.6 |
| TT1.9 | Build TimeEntryRow component | TT1.8 |
| TT1.10 | Build ManualTimeEntryForm | F1.3, TT1.1 |
| TT1.11 | Implement time entry creation | TT1.5, TT1.6 |
| TT1.12 | Implement time entry edit/delete | TT1.9 |
| TT1.13 | Link timer to projects/tasks | TT1.4, P1.3, T1.3 |

#### Invoicing
| Task | Description | Dependencies |
|------|-------------|--------------|
| I1.1 | Define Invoice TypeScript types | F1.4 |
| I1.2 | Create Firestore security rules for invoices | F1.2 |
| I1.3 | Implement useInvoices hook | A1.2, I1.1 |
| I1.4 | Build InvoiceList view | F1.5, I1.3 |
| I1.5 | Build InvoiceCard component | I1.4 |
| I1.6 | Build CreateInvoiceDialog | F1.3, I1.1 |
| I1.7 | Build TimeEntrySelector for invoice | I1.6, TT1.6 |
| I1.8 | Build InvoiceLineItemEditor | I1.6 |
| I1.9 | Implement invoice creation logic | I1.6, I1.3 |
| I1.10 | Build InvoiceDetailPage | F1.5, I1.3 |
| I1.11 | Implement invoice status management | I1.10 |
| I1.12 | Implement PDF generation with @react-pdf | I1.10 |
| I1.13 | Mark time entries as invoiced | I1.9, TT1.6 |

#### Dashboard
| Task | Description | Dependencies |
|------|-------------|--------------|
| D1.1 | Build Dashboard page layout | F1.5 |
| D1.2 | Build MetricCard component | F1.3 |
| D1.3 | Implement dashboard metrics calculations | P1.3, C1.3, TT1.6, I1.3 |
| D1.4 | Build summary metric cards | D1.2, D1.3 |
| D1.5 | Build ProjectHealthGrid (basic list) | P1.4 |
| D1.6 | Build UpcomingDeadlinesList | T1.3 |
| D1.7 | Build OverdueTasksList | T1.3 |

### 5.2.3 Phase 1 Exit Criteria
- [ ] User can sign up, sign in, and sign out
- [ ] User can create, view, edit, and delete projects
- [ ] User can create, view, edit, and delete tasks
- [ ] User can drag tasks between Kanban columns
- [ ] User can create and manage clients with contacts
- [ ] User can start/stop timer and create manual time entries
- [ ] User can create invoices from time entries
- [ ] User can download invoice as PDF
- [ ] Dashboard shows key metrics
- [ ] All data syncs in real-time

---

## 5.3 Phase 2: Enhanced Features

### 5.3.1 Objectives
- Add project health indicators for proactive management
- Implement milestone tracking for deliverable management
- Enhance task management with priority, labels, and subtasks
- Build time reporting capabilities

### 5.3.2 Deliverables

#### Project Enhancements
| Task | Description | Dependencies |
|------|-------------|--------------|
| PE2.1 | Add status field to Project type | Phase 1 |
| PE2.2 | Add type and priority fields to Project | Phase 1 |
| PE2.3 | Build ProjectStatusBadge component | PE2.1 |
| PE2.4 | Implement project status workflow | PE2.1 |
| PE2.5 | Build ProjectHealthIndicator component | Phase 1 |
| PE2.6 | Implement health calculation logic | PE2.5, D1.3 |
| PE2.7 | Add project filtering by status/type/client | PE2.2 |
| PE2.8 | Build project timeline visualization | Phase 1 |
| PE2.9 | Add progress percentage display | PE2.6 |

#### Task Enhancements
| Task | Description | Dependencies |
|------|-------------|--------------|
| TE2.1 | Add priority field to Task type | Phase 1 |
| TE2.2 | Add type field to Task type | Phase 1 |
| TE2.3 | Add labels array to Task type | Phase 1 |
| TE2.4 | Build TaskPriorityBadge component | TE2.1 |
| TE2.5 | Build TaskTypeBadge component | TE2.2 |
| TE2.6 | Build TaskLabelChips component | TE2.3 |
| TE2.7 | Add priority to CreateTaskDialog | TE2.4 |
| TE2.8 | Add type to CreateTaskDialog | TE2.5 |
| TE2.9 | Add label management to TaskDetailPanel | TE2.6 |
| TE2.10 | Implement task filtering by priority/type/label | TE2.1, TE2.2, TE2.3 |
| TE2.11 | Add parentTaskId for subtasks | Phase 1 |
| TE2.12 | Build SubtaskList component | TE2.11 |
| TE2.13 | Implement subtask creation | TE2.11 |
| TE2.14 | Show subtask progress on parent | TE2.12 |
| TE2.15 | Implement priority sorting in columns | TE2.1 |

#### Milestones
| Task | Description | Dependencies |
|------|-------------|--------------|
| M2.1 | Define Milestone TypeScript types | Phase 1 |
| M2.2 | Create Firestore security rules for milestones | Phase 1 |
| M2.3 | Implement useMilestones hook | M2.1 |
| M2.4 | Build MilestoneCard component | M2.1 |
| M2.5 | Build MilestoneList view | M2.4 |
| M2.6 | Build MilestoneTimeline component | M2.4 |
| M2.7 | Build CreateMilestoneDialog | M2.1 |
| M2.8 | Implement milestone creation | M2.7, M2.3 |
| M2.9 | Implement milestone status logic | M2.8 |
| M2.10 | Build MilestoneTaskLinker | M2.3, T1.3 |
| M2.11 | Calculate milestone progress from tasks | M2.10 |
| M2.12 | Add payment tracking to milestones | M2.1 |
| M2.13 | Build UpcomingMilestonesWidget | M2.3 |

#### Time Reports
| Task | Description | Dependencies |
|------|-------------|--------------|
| TR2.1 | Build TimeReportPage layout | Phase 1 |
| TR2.2 | Implement time aggregation by project | TT1.6 |
| TR2.3 | Implement time aggregation by user | TT1.6 |
| TR2.4 | Build time report table component | TR2.2, TR2.3 |
| TR2.5 | Build date range filter | TR2.1 |
| TR2.6 | Build project filter for reports | TR2.1 |
| TR2.7 | Build billable filter for reports | TR2.1 |
| TR2.8 | Calculate utilization rate | TR2.2, TR2.3 |
| TR2.9 | Build utilization chart | TR2.8 |
| TR2.10 | Show estimated vs actual comparison | TR2.2 |

### 5.3.3 Phase 2 Exit Criteria
- [ ] Projects have status, type, and priority fields
- [ ] Project health indicator shows on all project cards
- [ ] Tasks can have priority with visual indicators
- [ ] Tasks can have type (feature/bug/improvement/task)
- [ ] Tasks can have custom labels
- [ ] Tasks can have subtasks (one level)
- [ ] Kanban can filter by priority, type, label, assignee
- [ ] Milestones can be created and tracked per project
- [ ] Milestone timeline view is available
- [ ] Time reports show hours by project and user
- [ ] Utilization rate is visible

---

## 5.4 Phase 3: Reporting & Analytics

### 5.4.1 Objectives
- Build comprehensive reporting for business insights
- Add workload visualization for capacity planning
- Enable data export for external analysis
- Enhance dashboard with trends and charts

### 5.4.2 Deliverables

#### Advanced Reports
| Task | Description | Dependencies |
|------|-------------|--------------|
| AR3.1 | Build ProjectStatusReport page | Phase 2 |
| AR3.2 | Build ClientProfitabilityReport | Phase 2 |
| AR3.3 | Calculate revenue per client | I1.3, C1.3 |
| AR3.4 | Calculate effective hourly rate per client | AR3.3, TT1.6 |
| AR3.5 | Build WeeklySummaryReport | Phase 2 |
| AR3.6 | Implement CSV export for time data | TR2.4 |
| AR3.7 | Implement CSV export for project data | AR3.1 |
| AR3.8 | Implement PDF export for reports | AR3.1, AR3.2 |

#### Workload Management
| Task | Description | Dependencies |
|------|-------------|--------------|
| WM3.1 | Define capacity settings per user | Phase 1 |
| WM3.2 | Calculate weekly workload per user | T1.3, WM3.1 |
| WM3.3 | Build WorkloadPage layout | WM3.2 |
| WM3.4 | Build WorkloadBar component | WM3.3 |
| WM3.5 | Build TeamWorkloadGrid | WM3.4 |
| WM3.6 | Implement over-allocation warnings | WM3.2 |
| WM3.7 | Build TeamCalendarView | WM3.2 |
| WM3.8 | Show workload on task assignment | WM3.2 |

#### Dashboard Enhancements
| Task | Description | Dependencies |
|------|-------------|--------------|
| DE3.1 | Add trend arrows to metric cards | D1.3 |
| DE3.2 | Build RevenueChart (monthly) | I1.3 |
| DE3.3 | Build HoursChart (weekly) | TT1.6 |
| DE3.4 | Add "Projects at Risk" count | PE2.6 |
| DE3.5 | Add quick action buttons | D1.1 |
| DE3.6 | Build RecentActivityFeed | Phase 1 |
| DE3.7 | Implement activity logging | DE3.6 |
| DE3.8 | Add dashboard date range filter | D1.1 |

### 5.4.3 Phase 3 Exit Criteria
- [ ] Project status report is available
- [ ] Client profitability report shows revenue and hours
- [ ] Weekly summary report is available
- [ ] Data can be exported to CSV
- [ ] Reports can be exported to PDF
- [ ] Workload view shows capacity per team member
- [ ] Over-allocation warnings appear on task assignment
- [ ] Dashboard shows trend indicators
- [ ] Dashboard shows revenue and hours charts
- [ ] Activity feed shows recent actions

---

## 5.5 Phase 4: Polish & Optimization

### 5.5.1 Objectives
- Add power-user features for efficiency
- Implement global search
- Add templates for rapid project creation
- Optimize performance and polish mobile experience

### 5.5.2 Deliverables

#### Power User Features
| Task | Description | Dependencies |
|------|-------------|--------------|
| PU4.1 | Implement keyboard shortcuts system | Phase 1 |
| PU4.2 | Add shortcut for new project (Ctrl+Shift+P) | PU4.1 |
| PU4.3 | Add shortcut for new task (Ctrl+Shift+T) | PU4.1 |
| PU4.4 | Add shortcut for start timer (Ctrl+Shift+S) | PU4.1 |
| PU4.5 | Add shortcut for search (Ctrl+K) | PU4.1 |
| PU4.6 | Build keyboard shortcuts help dialog | PU4.1 |

#### Global Search
| Task | Description | Dependencies |
|------|-------------|--------------|
| GS4.1 | Build CommandPalette component (Cmd+K style) | Phase 1 |
| GS4.2 | Index projects for search | GS4.1, P1.3 |
| GS4.3 | Index tasks for search | GS4.1, T1.3 |
| GS4.4 | Index clients for search | GS4.1, C1.3 |
| GS4.5 | Implement quick navigation from search | GS4.1 |
| GS4.6 | Add recent items to search | GS4.1 |

#### Templates
| Task | Description | Dependencies |
|------|-------------|--------------|
| TP4.1 | Define project template data structure | Phase 1 |
| TP4.2 | Create default templates (Web Dev, Mobile, etc.) | TP4.1 |
| TP4.3 | Build "Create from Template" option | TP4.2 |
| TP4.4 | Implement template to project conversion | TP4.3 |
| TP4.5 | Add "Save as Template" for projects | TP4.1 |

#### Performance & Polish
| Task | Description | Dependencies |
|------|-------------|--------------|
| PP4.1 | Audit and optimize bundle size | Phase 3 |
| PP4.2 | Add loading skeletons to all pages | Phase 3 |
| PP4.3 | Implement optimistic updates | Phase 3 |
| PP4.4 | Add error boundaries | Phase 3 |
| PP4.5 | Polish mobile responsive design | Phase 3 |
| PP4.6 | Implement pull-to-refresh on mobile | PP4.5 |
| PP4.7 | Add PWA support (offline, installable) | PP4.5 |
| PP4.8 | Performance testing and optimization | PP4.1 |

### 5.5.3 Phase 4 Exit Criteria
- [ ] Keyboard shortcuts work for common actions
- [ ] Cmd+K search finds projects, tasks, and clients
- [ ] Projects can be created from templates
- [ ] Bundle size is optimized (<300kb initial)
- [ ] All pages have loading skeletons
- [ ] Mobile experience is polished and responsive
- [ ] App can be installed as PWA

---

# 6. Logical Dependency Chain

## 6.1 Foundation Layer (Build First)

These must be completed before any feature development:

```
F1.1 Initialize Next.js project
  └── F1.2 Configure Firebase
        ├── F1.3 Set up shadcn/ui
        │     └── F1.5 Base layout
        └── F1.4 Directory structure
              └── F1.6 Linting config
```

## 6.2 Authentication Layer

Depends on Foundation. Required by all features:

```
A1.1 Firebase Auth config
  └── A1.2 AuthContext + useAuth
        ├── A1.3 Sign-in page
        ├── A1.4 Sign-up page
        ├── A1.5 Password reset
        ├── A1.6 Protected routes
        ├── A1.7 Profile management
        └── A1.8 Sign-out
```

## 6.3 Core Data Layer

Depends on Authentication. Foundation for all features:

```
[Type Definitions: P1.1, T1.1, C1.1, TT1.1, I1.1]
  └── [Security Rules: P1.2, T1.2, C1.2, TT1.2, I1.2]
        └── [Data Hooks: P1.3, T1.3, C1.3, TT1.6, I1.3]
```

## 6.4 Feature Layer

Build features in this order for fastest path to usable product:

```
Phase 1 Features (Parallel after core data):
├── Projects (P1.3 → P1.11)
├── Tasks (T1.3 → T1.14) [depends on Projects for context]
├── Clients (C1.3 → C1.11)
├── Time Tracking (TT1.3 → TT1.13) [depends on Projects, Tasks]
├── Invoicing (I1.3 → I1.13) [depends on Clients, Time]
└── Dashboard (D1.1 → D1.7) [depends on all data hooks]
```

## 6.5 Enhancement Layer (Phase 2)

```
Project Enhancements (PE2.1 → PE2.9)
  └── Depends on Phase 1 Projects

Task Enhancements (TE2.1 → TE2.15)
  └── Depends on Phase 1 Tasks

Milestones (M2.1 → M2.13)
  ├── Depends on Phase 1 Projects
  └── Links to Tasks for progress

Time Reports (TR2.1 → TR2.10)
  └── Depends on Phase 1 Time Tracking
```

## 6.6 Analytics Layer (Phase 3)

```
Reports (AR3.1 → AR3.8)
  └── Depends on Phase 2 data + calculations

Workload (WM3.1 → WM3.8)
  └── Depends on Tasks + User capacity

Dashboard Enhancements (DE3.1 → DE3.8)
  └── Depends on all Phase 2 features
```

## 6.7 Polish Layer (Phase 4)

```
All Phase 4 features depend on Phase 3 completion
├── Keyboard shortcuts (independent)
├── Global search (depends on all data)
├── Templates (depends on Projects)
└── Performance (depends on everything)
```

---

# 7. Risks and Mitigations

## 7.1 Technical Risks

### Risk: Firebase Cost Escalation
**Probability**: Medium
**Impact**: Medium
**Description**: Firestore reads/writes could exceed free tier as usage grows

**Mitigations**:
1. Implement efficient queries with proper indexing
2. Use pagination for large collections
3. Cache frequently accessed data client-side
4. Denormalize to reduce read counts
5. Monitor usage in Firebase console
6. Set up billing alerts

### Risk: Real-time Sync Conflicts
**Probability**: Low
**Impact**: Medium
**Description**: Multiple users editing same document simultaneously

**Mitigations**:
1. Use Firestore transactions for critical operations
2. Implement optimistic locking where needed
3. Show "last edited by" indicators
4. Use field-level updates instead of full document writes

### Risk: Performance Degradation with Data Growth
**Probability**: Medium
**Impact**: High
**Description**: Large task/time entry collections slow down queries

**Mitigations**:
1. Implement pagination from the start
2. Create compound indexes for common queries
3. Archive old data (completed projects > 1 year)
4. Use collection groups for cross-project queries
5. Lazy load non-essential data

### Risk: Authentication Security Vulnerabilities
**Probability**: Low
**Impact**: High
**Description**: Unauthorized access to sensitive data

**Mitigations**:
1. Use Firebase Auth (battle-tested security)
2. Implement strict Firestore security rules
3. Validate all writes against user permissions
4. Rate limit authentication attempts
5. Require email verification

### Risk: Data Loss from Accidental Deletion
**Probability**: Low
**Impact**: High
**Description**: User accidentally deletes project or critical data

**Mitigations**:
1. Require confirmation for all deletions
2. Implement soft delete (mark deleted, purge later)
3. Enable Firestore point-in-time recovery
4. Regular automated backups (Firebase extension)

## 7.2 Scope Risks

### Risk: Feature Creep Beyond MVP
**Probability**: High
**Impact**: Medium
**Description**: Adding "nice to have" features before core is complete

**Mitigations**:
1. Strict phase boundaries defined in this PRD
2. Out of scope list explicitly defined
3. All feature requests go to backlog for Phase 4+
4. Focus on Phase 1 exit criteria before advancing
5. Regular scope review against original requirements

### Risk: Over-Engineering Solutions
**Probability**: Medium
**Impact**: Medium
**Description**: Building for scale that won't be needed

**Mitigations**:
1. Start simple, optimize when needed
2. Avoid premature abstraction
3. Use Firebase managed services (no custom infra)
4. Defer complex features (approval workflows, integrations)

## 7.3 Resource Risks

### Risk: Single Developer Bandwidth
**Probability**: High
**Impact**: High
**Description**: One developer building entire system

**Mitigations**:
1. Phased approach prioritizes essential features
2. Use pre-built components (shadcn/ui)
3. Leverage Firebase for backend complexity
4. AI-assisted development (Task Master, Claude)
5. Focus on quality over quantity

### Risk: Knowledge Concentration
**Probability**: Medium
**Impact**: Medium
**Description**: Only one person understands the system

**Mitigations**:
1. Document decisions in this PRD
2. Write clear code with TypeScript types
3. Comment complex business logic
4. Create onboarding documentation in Phase 4

## 7.4 Business Risks

### Risk: Low User Adoption
**Probability**: Medium
**Impact**: High
**Description**: Team doesn't use the system consistently

**Mitigations**:
1. Involve team in requirements (this PRD)
2. Make common workflows frictionless
3. Ensure time tracking is effortless
4. Provide training and support
5. Lead by example (owner uses it daily)

### Risk: Inadequate for Actual Workflows
**Probability**: Medium
**Impact**: High
**Description**: System doesn't match how team actually works

**Mitigations**:
1. Based on real GlitchZero Labs needs
2. Flexible task labels/types for adaptation
3. Customizable Kanban columns (future)
4. Iterative improvement based on feedback

---

# 8. Appendix

## 8.1 Glossary

| Term | Definition |
|------|------------|
| **Project** | A client engagement with defined scope, timeline, and budget |
| **Task** | An individual work item within a project |
| **Milestone** | A significant deliverable or checkpoint in a project |
| **Time Entry** | A record of time spent working on a project/task |
| **Billable** | Work that can be charged to a client |
| **Utilization** | Percentage of total time that is billable |
| **Health Status** | Calculated indicator of project risk level |
| **Kanban** | Visual task management with status columns |
| **Subtask** | A child task under a parent task |
| **Retainer** | Ongoing billing arrangement with fixed monthly rate |

## 8.2 User Stories

### Authentication
- As a user, I want to sign up with my email so I can access the system
- As a user, I want to sign in securely so my data is protected
- As a user, I want to reset my password if I forget it

### Projects
- As an owner, I want to create projects so I can track client work
- As a PM, I want to see project health so I can identify risks early
- As a developer, I want to see my assigned projects so I know what to work on

### Tasks
- As a PM, I want to create tasks so work is broken into manageable pieces
- As a developer, I want to drag tasks to update status so it's quick
- As a PM, I want to see overdue tasks so nothing slips through

### Time
- As a developer, I want to start a timer so I capture accurate time
- As an owner, I want to see billable hours so I can invoice clients
- As a PM, I want to see hours per project so I can track budget

### Clients
- As an owner, I want to store client info so it's centralized
- As a PM, I want to see client projects so I have context
- As an owner, I want to track contacts so I know who to call

### Invoices
- As an owner, I want to create invoices from time so it's accurate
- As an owner, I want to track invoice status so I know what's paid
- As an owner, I want to download PDFs so I can send to clients

## 8.3 Wireframe References

Wireframes should be created for:
1. Dashboard layout
2. Project list and card design
3. Kanban board layout
4. Task detail panel
5. Time tracker interface
6. Invoice creation flow
7. Mobile responsive views

(Wireframes to be created separately in design tool)

## 8.4 Competitive Analysis Summary

| Tool | Strengths | Weaknesses | Relevance |
|------|-----------|------------|-----------|
| **Monday.com** | Beautiful UI, flexible | Expensive, complex | UI inspiration |
| **Asana** | Clean task management | Weak time tracking | Task UX reference |
| **ClickUp** | All-in-one | Overwhelming | Feature scope warning |
| **Productive** | Agency-focused | Pricey | Core feature set |
| **Teamwork** | Time + invoicing | Dated UI | Workflow inspiration |
| **Harvest** | Simple time tracking | Limited PM | Timer UX |
| **Basecamp** | Simplicity | Limited features | Simplicity philosophy |

**Key Learnings**:
- Simplicity beats feature count for adoption
- Time tracking must be frictionless
- Visual status indicators are essential
- Real-time updates expected in 2025
- Mobile access is table stakes

## 8.5 Technical Reference Links

- [Next.js 14 Documentation](https://nextjs.org/docs)
- [Firebase Documentation](https://firebase.google.com/docs)
- [Firestore Data Modeling](https://firebase.google.com/docs/firestore/data-model)
- [shadcn/ui Components](https://ui.shadcn.com/)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [@dnd-kit Documentation](https://docs.dndkit.com/)
- [React Hook Form](https://react-hook-form.com/)
- [Zod Validation](https://zod.dev/)

## 8.6 Firestore Cost Estimation

Based on expected usage patterns:

| Operation | Daily Count | Monthly Count | Free Tier | Overage Cost |
|-----------|-------------|---------------|-----------|--------------|
| Reads | 5,000 | 150,000 | 50,000 | ~$0.03/100k |
| Writes | 500 | 15,000 | 20,000 | ~$0.09/100k |
| Deletes | 50 | 1,500 | 20,000 | ~$0.01/100k |
| Storage | - | 100 MB | 1 GB | ~$0.18/GB |

**Estimated Monthly Cost**: $0-25 (Year 1), $25-100 (Year 3)

## 8.7 Version History

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0.0 | December 2025 | Claude | Initial PRD creation |

---

</PRD>
