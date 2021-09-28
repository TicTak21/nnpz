#!/usr/bin/env bash

# rename $1 to $2
nx g @nrwl/angular:mv --project $1 --destination $2

# cleanup $1 dir
rm -rf apps/$1