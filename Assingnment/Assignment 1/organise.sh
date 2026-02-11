
#!/bin/bash

mkdir -p img pdf video txt mp3

for file in *; do
    [ -f "$file" ] || continue

    case "$file" in
        *.jpg|*.png)   mv "$file" img/ ;;
        *.pdf)        mv "$file" pdf/ ;;
        *.mp4|*.mkv)  mv "$file" video/ ;;
        *.txt)        mv "$file" txt/ ;;
        *.mp3)        mv "$file" mp3/ ;;
    esac
done
