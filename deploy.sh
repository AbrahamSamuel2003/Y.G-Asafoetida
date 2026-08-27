#!/bin/bash
echo "=== FORCING FULL LIVE SERVER UPDATE ==="

# 1. Navigate to directory
cd /home/yghingcom/Y.G-Asafoetida || exit 1

# 2. Hard sync with latest GitHub build
echo "Syncing latest build from GitHub..."
git fetch origin main
git clean -fd
git reset --hard origin/main

# 3. Kill any running node server instances
echo "Stopping existing server processes..."
fuser -k 3000/tcp 2>/dev/null
pkill -9 -u yghingcom -f "index.mjs" 2>/dev/null
pkill -9 -u yghingcom -f "node" 2>/dev/null
sleep 2

# 4. Clear LiteSpeed cache if present
rm -rf /home/yghingcom/lscache/* 2>/dev/null

# 5. Start new server on PORT 3000
echo "Starting updated server on port 3000..."
export PORT=3000
export HOST=0.0.0.0
export NODE_ENV=production
nohup node .output/server/index.mjs > server.log 2>&1 &

sleep 3

# 6. Verify health
echo "=== TESTING SERVER RESPONSE ==="
curl -I http://127.0.0.1:3000/

echo "=== RESTART TRIGGERED SUCCESSFULLY ==="
