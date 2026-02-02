# Folder Reorganization Plan

## New Structure:
```
src/
├── app/                    # Next.js app directory (keep mostly as is)
├── components/
│   ├── ui/                 # Reusable UI components (keep)
│   ├── features/           # Feature-based components
│   │   ├── landing/        # Landing page components
│   │   ├── header/         # Header feature
│   │   └── banner/         # Banner feature
│   ├── layout/             # Layout components (Container, LangSwitcher)
│   └── providers/          # Context providers (renamed from provider/)
├── hooks/                  # All hooks (flattened)
├── lib/                    # Utilities and helpers
├── context/                # Context providers (move from components/context)
├── types/                  # TypeScript types
├── styles/                 # Global styles
└── misc/                   # Rarely used files (DemoLayout, proxy.ts)
```

## File Moves:
1. components/landing/Hero.tsx/index.tsx → components/features/landing/Hero.tsx
2. components/landing/animation/LogoAnimation.tsx → components/features/landing/LogoAnimation.tsx
3. components/layout/header/* → components/features/header/*
4. components/layout/Banner.tsx → components/features/banner/Banner.tsx
5. components/context/* → context/*
6. components/provider/* → components/providers/*
7. components/animation/icons/* → components/ui/icons/* (or keep in features)
8. hooks/header/* → hooks/* (flatten)
9. components/DemoLayout.tsx → misc/DemoLayout.tsx
10. proxy.ts → misc/proxy.ts
11. components/safariMockup.tsx → components/features/landing/SafariMockup.tsx
