---
title: "Command Line Cheat Sheet"
description: "Everything you need to know to start your hill walking journey safely and confidently."
image: "https://images.pexels.com/photos/1365425/pexels-photo-1365425.jpeg?auto=compress&cs=tinysrgb&w=800"
category: "Beginner"
date: "2024-11-15"
author: "Sarah Mitchell"
---

The _Command Line_ is a text based interface that exists on every operating system in some form, _eg *Terminal* on the Mac_. By typing commands in the Terminal you can access files, install and manipulate programs and communicate with the computer internal workings. _Pretty much everything is available via Terminal_.

Programmers use the _Command Line_ to install packages, _eg through NPM_, to aid coding and developing their projects. It's also used to upload and download projects to platforms like _Github_. The _Command Line_ can seem a little daunting, but with a few basic commands, _like below_, will give you a basic understanding of how the _Command Line_ works.

---

## SHORTCUTS

`Tab` - _Auto-complete files and folder names_

`Ctrl + A` - _Go to the beginning of the line you are currently typing on_

`Ctrl + E` - _Go to the end of the line you are currently typing on_

`Ctrl + U` - _Clear the line before the cursor_

`Ctrl + K` - _Clear the line after the cursor_

`Ctrl + W` - _Delete the word before the cursor_

`Ctrl + T` - _Swap the last two characters before the cursor_

`Esc + T` - _Swap the last two words before the cursor_

`Ctrl + R` - _Lets you search through previously used commands_

`Ctrl + L` or `Command + K` - _Clears the Screen_

`Ctrl + C` - _Kill whatever you are running_

`Ctrl + D` - _Exit the current shell_

---

## CORE COMMANDS

`pwd` - _Print working directory - displays the file path from the root directory to the current directory_

`cd` - _Home directory_

`cd [folder name]` - _Change to named directory_

`cd ~` - _Home directory, e.g. cd ~/folder/_

`cd /` - _Root of drive_

`ls` - _Short listing_

`ls -l` - _Long listing_

`ls -a` - _Listing incl. hidden files_

`ls -t` - _Lists all content by time they were last modified_

`ls -lh` - _Long listing with Human readable file sizes_

`ls -R` - _Entire content of folder recursively_

`sudo [command]` - _Run command with the security privileges of the superuser (requires password)_

`open [file]` - _Opens a file_

`open .` - _Opens the directory_

`top	` - _Displays active processes. Press q to quit_

`nano [file]` - _Opens the Terminal editor_

`pico [file]` - _Opens the Terminal editor_

`q` - _Exit_

`clear` - _Clear screen_

`npm run dev -- -o` - _Run development server and open in browser_

---

## COMMAND HISTORY

`history n` - _Shows the stuff typed - add a number to limit the last n items_

`ctrl-r` - _Interactively search through previously typed commands_

`![value]` - _Execute the last command typed that starts with value_

`!!` - _Execute the last command typed_

---

## FILE MANAGEMENT

`touch [file]` - _Create new file in the current working directory_

`pwd` - _Full path to working directory_

`..` - _Parent/enclosing directory_

`ls ..` - _Long listing of parent directory_

`cd ../../ `- _Move 2 levels up_

`.` - _Current folder_

`cat` - _Concatenate to screen_

`rm [file]` - _Remove a file_

`rm -i [file]` - _Remove with confirmation_

`rm -r [dir]` - _Remove a directory and contents_

`rm -f [file]` - _Force removal without confirmation_

`rm -i [file]` - _Will display prompt before_

`cp [file] [newfile]` - _Copy file_

`cp [file] [dir]` - _Copy file to directory_

`mv [file] [new filename]` - _Move/Rename, e.g. mv -v [file] [dir]_

---

## DIRECTORY MANAGEMENT

`mkdir [dir]` - _Create new directory_

`mkdir -p [dir]/[dir]` - _Create nested directories_

`rmdir [dir]` - _Remove directory ( only works with empty directories )_

`rm -R [dir]` - _Remove directory and contents_

---

### PIPES

_Allows to combine multiple commands that generate output_

`more` - _Output content delivered in screensize chunks_

`> [file]` - _Push output to file, keep in mind it will get overwritten_

`>> [file]` - _Append output to existing file_

`<` - _Tell command to read content from a file_

---

## HELP

`[command] -h` - _Offers help_

`[command] --help` - _Offers help_

`[command] help` - _Offers help_

`reset` - _Resets the terminal display_

`man [command]` - _Show the help for command_

`whatis [command]` - _Gives a one-line description of command_
