/**
 * @param {number[][]} times
 * @param {number} n
 * @param {number} k
 * @return {number}
 */

var networkDelayTime = function networkDelayTime(times, n, k) {
    // Create an adjacency list representation of the graph
    const graph = {};
    for (let i = 1; i <= n; i++) {
      graph[i] = {};
    }
    for (let i = 0; i < times.length; i++) {
      const [u, v, w] = times[i];
      graph[u][v] = w;
    }
  
    // Define a helper function to perform Dijkstra's algorithm
    function dijkstra(graph, start) {
      // Initialize data structures to store shortest distances and previous nodes
      const distances = new Map();
      const previous = new Map();
      const queue = [];
      const visited = new Set();
  
      for (let node in graph) {
        distances.set(node, node === start.toString() ? 0 : Infinity);
        previous.set(node, null);
      }
  
      queue.push({ element: start.toString(), priority: 0 });
  
      // Process nodes in the priority queue
      while (queue.length > 0) {
        queue.sort((a, b) => a.priority - b.priority);
        const currentNode = queue.shift().element;
  
        if (visited.has(currentNode)) continue;
        visited.add(currentNode);
  
        // Explore Neighbours of this node
        for (let neighbor in graph[currentNode]) {
          const weight = graph[currentNode][neighbor];
          const newDistance = distances.get(currentNode) + weight;
          const oldDistance = distances.get(neighbor);
  
          if (newDistance < oldDistance) {
            distances.set(neighbor, newDistance);
            previous.set(neighbor, currentNode);
            queue.push({ element: neighbor, priority: newDistance });
          }
        }
      }
  
      let maxDistance = 0;
      for (let node of distances.keys()) {
        if (node !== start.toString() && distances.get(node) < Infinity) {
          maxDistance = Math.max(maxDistance, distances.get(node));
        }
      }
  
      for (let node of distances.keys()) {
        if (node !== start.toString() && distances.get(node) === Infinity) {
          return -1;
        }
      }
      return maxDistance;
    }
  
    return dijkstra(graph, k);
  }