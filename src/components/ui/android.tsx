import { SVGProps } from "react"

export interface AndroidProps extends SVGProps<SVGSVGElement> {
  width?: number
  height?: number
  src?: string
  videoSrc?: string
}

export function Android({
  width = 433,
  height = 882,
  src,
  videoSrc,
  ...props
}: AndroidProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 433 882"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      {/* Side buttons */}
      <path
        d="M376 153H378C379.105 153 380 153.895 380 155V249C380 250.105 379.105 251 378 251H376V153Z"
        className="fill-[#2a2a2a] dark:fill-[#1a1a1a]"
      />
      <path
        d="M376 301H378C379.105 301 380 301.895 380 303V351C380 352.105 379.105 353 378 353H376V301Z"
        className="fill-[#2a2a2a] dark:fill-[#1a1a1a]"
      />
      {/* Outer frame */}
      <path
        d="M0 42C0 18.8041 18.804 0 42 0H336C359.196 0 378 18.804 378 42V788C378 811.196 359.196 830 336 830H42C18.804 830 0 811.196 0 788V42Z"
        className="fill-[#1a1a1a] dark:fill-[#0a0a0a]"
      />
      {/* Inner bezel */}
      <path
        d="M2 43C2 22.0132 19.0132 5 40 5H338C358.987 5 376 22.0132 376 43V787C376 807.987 358.987 825 338 825H40C19.0132 825 2 807.987 2 787V43Z"
        className="fill-[#0f0f0f] dark:fill-[#0a0a0a]"
      />

      <g clipPath="url(#androidClip)">
        {/* Screen background */}
        <path
          d="M9.25 48C9.25 29.3604 24.3604 14.25 43 14.25H335C353.64 14.25 368.75 29.3604 368.75 48V780C368.75 798.64 353.64 813.75 335 813.75H43C24.3604 813.75 9.25 798.64 9.25 780V48Z"
          className="fill-[#000000]"
        />
        {src && (
          <image
            href={src}
            x="9"
            y="14"
            width="360"
            height="800"
            preserveAspectRatio="xMidYMid slice"
          />
        )}
        {videoSrc && (
          <foreignObject
            x="9"
            y="14"
            width="360"
            height="800"
          >
            <video
              className="size-full object-cover"
              src={videoSrc}
              autoPlay
              loop
              muted
              playsInline
            />
          </foreignObject>
        )}
      </g>

      {/* Camera hole punch - outer ring */}
      <circle
        cx="189"
        cy="28"
        r="10"
        className="fill-[#0a0a0a]"
      />
      {/* Camera lens - dark glass */}
      <circle
        cx="189"
        cy="28"
        r="7"
        fill="url(#cameraLensGradient)"
      />
      {/* Camera lens reflection - subtle highlight */}
      <circle
        cx="186"
        cy="25"
        r="2"
        className="fill-white/20"
      />
      {/* Camera lens inner ring */}
      <circle
        cx="189"
        cy="28"
        r="4"
        className="fill-[#1a1a1a]"
      />
      {/* Camera sensor dot */}
      <circle
        cx="189"
        cy="28"
        r="1.5"
        className="fill-[#2d1f3d]"
      />

      <defs>
        <clipPath id="androidClip">
          <rect
            x="9"
            y="14"
            width="360"
            height="800"
            rx="33"
            ry="25"
          />
        </clipPath>
        {/* Camera lens gradient for realistic glass effect */}
        <radialGradient id="cameraLensGradient" cx="0.3" cy="0.3" r="0.7">
          <stop offset="0%" stopColor="#3a3a4a" />
          <stop offset="50%" stopColor="#1a1a2a" />
          <stop offset="100%" stopColor="#0a0a1a" />
        </radialGradient>
      </defs>
    </svg>
  )
}
