# Team Profile Modal Integration Design

**Date:** 2026-06-07  
**Feature:** Integrate InteractiveTeamProfile modal into Team component  
**Status:** Approved

## Overview

Integrate the existing `InteractiveTeamProfile` modal component into the `Team` section so clicking a team member card displays their detailed profile in a modal overlay.

## Requirements

- Clicking a team member card opens a modal with detailed profile information
- Modal closes when user clicks the X button
- Modal displays merged data from both basic team info and detailed profile data
- Team component manages all modal state locally
- No changes to existing InteractiveTeamProfile component

## Architecture

### Data Structure

#### Existing: `team` array (Team.tsx)
```typescript
type Member = {
  name: string;
  role: string;
  photo: string;
  linkedin: string;
  email: string;
  github: string;
};

const team: Member[] = [
  { name: "Aashish Adhikari", role: "Founder & CEO", photo: "...", linkedin: "...", email: "...", github: "..." },
  { name: "Er. Bhagirath Aryal", role: "ML Engineer Intern", photo: "...", linkedin: "...", email: "...", github: "..." },
  { name: "Sijan Bhusal", role: "Software Engineer Intern", photo: "...", linkedin: "...", email: "...", github: "..." },
];
```

#### New: `teamProfiles` array (Team.tsx)
```typescript
type TeamProfile = {
  initials: string;
  bio: string;
  techStack: string[];
};

const teamProfiles: TeamProfile[] = [
  {
    initials: "AA",
    bio: "[bio for Aashish]",
    techStack: ["React", "Node.js", "Python", "..."]
  },
  {
    initials: "BA",
    bio: "[bio for Bhagirath]",
    techStack: ["TensorFlow", "PyTorch", "Python", "..."]
  },
  {
    initials: "SB",
    bio: "[bio for Sijan]",
    techStack: ["React", "Next.js", "TypeScript", "..."]
  },
];
```

Both arrays are indexed in parallel. The first member in `team[]` pairs with the first in `teamProfiles[]`, etc.

### Component Changes: Team.tsx

1. **State Management**
   - Add `useState<number | null>` to track `selectedMemberIndex`
   - Default value: `null` (modal closed)

2. **TeamCard Handler**
   - Update `TeamCard` onClick to receive and set the index instead of calling `onViewProfile`
   - Remove or repurpose the `onViewProfile` prop

3. **Modal Rendering**
   - When `selectedMemberIndex !== null`, render `InteractiveTeamProfile` with:
     ```typescript
     {
       ...team[selectedMemberIndex],
       ...teamProfiles[selectedMemberIndex],
     }
     ```
   - Pass `onClose={() => setSelectedMemberIndex(null)}` to modal

4. **Modal Dismissal**
   - Only the X button in the modal closes it
   - Clicking backdrop does not close (handled by modal component)

### Data Flow

```
User clicks TeamCard
  ↓
TeamCard onClick handler
  ↓
setSelectedMemberIndex(index)
  ↓
Team component re-renders with selectedMemberIndex set
  ↓
Modal receives merged data { ...team[index], ...teamProfiles[index] }
  ↓
Modal displays, user clicks X button
  ↓
Modal calls onClose()
  ↓
setSelectedMemberIndex(null)
  ↓
Modal unmounts
```

## Implementation Details

### File: app/components/Team.tsx
- Import `useState` from "react"
- Import `InteractiveTeamProfile` from "./InteractiveTeamProfile"
- Add `teamProfiles` array with one entry per team member
- Wrap `TeamCard` onClick to pass index
- Render modal at bottom of Team section

### No Changes Required
- `app/components/InteractiveTeamProfile.tsx` — stays as-is
- Other components — no impact
- Public assets — no changes

## Type Safety

Merge type at render time:
```typescript
const mergedMember: TeamMemberProfile = {
  ...team[selectedMemberIndex],
  ...teamProfiles[selectedMemberIndex],
};
```

Ensure both arrays have the same length (validated by TypeScript if using constant arrays).

## Testing

1. **Manual verification:**
   - Click each team member card → modal opens with correct data
   - Click X button → modal closes
   - Click another card → previous modal closes and new one opens
   - Verify all text, images, and links are correct in modal

2. **Edge cases:**
   - First and last members work correctly
   - Member names and bios display without truncation
   - Tech stack badges wrap appropriately on mobile

## Success Criteria

- Modal opens when clicking a team member card
- Modal displays correct member name, role, bio, and tech stack
- Modal closes when X button is clicked
- No console errors or warnings
- Works on mobile and desktop viewports

## Open Questions

None — design is complete and approved.
