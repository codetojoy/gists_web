#!/bin/bash

set -e

npx jasmine-browser-runner runSpecs

echo "TRACER result (0 is OK): $?"
