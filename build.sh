#!/bin/bash

target_dir="/Applications/MAMP/htdocs/openqueue"

echo "Build docsite project and copy to target directory: ${target_dir}"

docsite build

echo "Clean target directory: ${target_dir}"
rm -rf $target_dir
mkdir $target_dir

echo "Copy files to target directory: ${target_dir}"
cp -r ./build $target_dir
cp -r ./img $target_dir
cp -r ./zh-cn $target_dir
cp -r ./en-us $target_dir
cp index.html $target_dir