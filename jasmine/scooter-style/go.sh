#!/bin/bash

set -e

echo ""
echo "browse to: http://localhost:8180/test/SpecRunner.html"
echo ""
echo ""

python -m http.server 8180
