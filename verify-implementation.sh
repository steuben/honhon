#!/bin/bash

echo "=== HonHon Lesson Flow System - Implementation Verification ==="
echo ""

RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

check_file() {
    if [ -f "$1" ]; then
        echo -e "${GREEN}✓${NC} $1"
        return 0
    else
        echo -e "${RED}✗${NC} $1"
        return 1
    fi
}

echo "Core Files:"
check_file "app/src/lib/lessonFlow.ts"
echo ""

echo "Container Component:"
check_file "app/src/lib/components/lesson/LessonContainer.svelte"
echo ""

echo "Phase Components:"
check_file "app/src/lib/components/lesson/IntroductionPhase.svelte"
check_file "app/src/lib/components/lesson/TeachingPhase.svelte"
check_file "app/src/lib/components/lesson/ExercisePhase.svelte"
check_file "app/src/lib/components/lesson/ReviewPhase.svelte"
echo ""

echo "Routing:"
check_file "app/src/routes/lektion/[lessonId]/+page.svelte"
echo ""

echo "Utilities:"
check_file "app/src/lib/utils/lessonAdapter.ts"
echo ""

echo "Database:"
check_file "app/src/lib/db/schema.ts"
check_file "app/src/lib/db/lessonQueries.ts"
echo ""

echo "Types:"
check_file "app/src/lib/types/index.ts"
echo ""

echo "Documentation:"
check_file "LESSON_FLOW_SYSTEM.md"
check_file "IMPLEMENTATION_SUMMARY.md"
echo ""

echo "=== File Count Summary ==="
echo "Core implementation files: $(find app/src/lib/components/lesson app/src/lib/lessonFlow.ts app/src/lib/utils/lessonAdapter.ts -type f 2>/dev/null | wc -l | xargs)"
echo "Documentation files: 2"
echo ""

echo "=== Next Steps ==="
echo "1. Run: cd app && npm run dev"
echo "2. Navigate to: http://localhost:5173/lektion/example"
echo "3. Test all 6 lesson phases"
echo "4. Check browser console for any errors"
echo "5. Verify progress saves on refresh"
echo ""

echo "=== Code Statistics ==="
find app/src/lib/components/lesson app/src/lib/lessonFlow.ts app/src/lib/utils/lessonAdapter.ts -type f -name "*.ts" -o -name "*.svelte" 2>/dev/null | while read file; do
    lines=$(wc -l < "$file" 2>/dev/null)
    echo "  $(basename $file): $lines lines"
done

