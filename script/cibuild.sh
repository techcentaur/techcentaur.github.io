#!/usr/bin/env bash
set -e # halt script on error

bundle exec jekyll build
bundle exec htmlproofer _site --disable-external --allow-hash-href


bundle exec jekyll serve