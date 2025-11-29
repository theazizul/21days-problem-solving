#!/usr/bin/env bash
set -euo pipefail

usage() {
  cat <<EOF
Usage: $(basename "$0") TARGET_DIR [END]       # creates p1..pEND (default END=10)
       $(basename "$0") TARGET_DIR START END  # creates pSTART..pEND

Examples:
  $(basename "$0") ./day01-simple-number-problems 12
  $(basename "$0") ./day01-simple-number-problems 3 12
EOF
  exit 1
}

if [ "$#" -lt 1 ] || [ "$#" -gt 3 ]; then
  usage
fi

target="$1"

if [ "$#" -eq 1 ]; then
  start=1
  end=10
elif [ "$#" -eq 2 ]; then
  start=1
  end="$2"
else
  start="$2"
  end="$3"
fi

# basic validation: ensure start and end are integers and start <= end
if ! [[ "$start" =~ ^[0-9]+$ ]] || ! [[ "$end" =~ ^[0-9]+$ ]]; then
  echo "Error: start and end must be positive integers." >&2
  exit 2
fi

if [ "$start" -gt "$end" ]; then
  echo "Error: start ($start) must be <= end ($end)." >&2
  exit 2
fi

mkdir -p "$target"

for i in $(seq "$start" "$end"); do
  folder="$target/p$i"
  if [ -d "$folder" ]; then
    echo "Skipping existing folder: $folder"
    continue
  fi
  mkdir -p -- "$folder"

  file="$folder/index.js"
  cat > "$file" <<EOF
#!/usr/bin/env node
// লুপের ভিতরে সৃজনশীলভাবে লজিক পরিবর্তন/প্রয়োগ করা।
'use strict';
const input = Number(process.argv[2]);
/**
 * Placeholder solution for p$i
 */
console.log(input);
EOF
  chmod +x -- "$file"
  echo "Created $file"
done

echo "Done: created p${start}..p${end} under $target"