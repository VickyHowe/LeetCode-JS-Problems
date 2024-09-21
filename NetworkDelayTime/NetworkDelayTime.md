# Leet Code problem 743.Network Delay Time
[Network Delay Time](https://leetcode.com/problems/network-delay-time/description/)

## Constraints 
* Return the minimum time it takes for all the n nodes to receive the signal
* If it is impossible for all the n nodes to receive the signal, return -1
* 1 <= k <= n <= 100
* 1 <= times.length <= 6000
* times[i].length == 3
* 1 <= ui, vi <= n
* ui != vi
* 0 <= wi <= 100
* All the pairs (ui, vi) are unique. (i.e., no multiple edges.)



### Algorithm
We can use Dijkstra's algorithm to solve this problem. The idea is to maintain a priority queue. 

This algorithm takes two inputs: a graph and k, which is an adjacency list representation of a weighted graph. It maintains a priority queue of nodes to visit, with the priority being the minimum distance from the starting node to each node. 

The algorithm iteratively extracts the node with the minimum priority from the queue, updates the distances to its neighbors, and adds them if necessary. 

The algorithm then finds the maximum distance from the starting node to all other nodes by iterating over the distances object. 

If any node has an infinite distance, the algorithm returns -1.

This implementation of Dijkstra's algorithm finds the maximum distance from a starting node to all other nodes in a weighted graph.


### Time Complexity O(m + n log n)
* m = # of edges
* n = # of nodes

#### Graph Construction
* iterating over the `times` array takes O(m) time

#### Dijkstra's algorithm
* Initialization - O(n)
* Priority Queue Operations - sort and extracting elements in O(log n) done O(n) time resulting in O(n log n)
* Exploring the Neighbors - O(m)
* Updating the distances and previous nodes - O(1) times for each node, O(n)

#### Finding maximum distance
* Iterating over distances map - O(n)


### Space Complexity  O(m + n)
* m = # of edges
* n = # of nodes

#### Graph Representation
* Adjacency List - O(m + n)

#### Dijkstra's algorithm
* Distances map - O(n)
* Previous nodes map - O(n)
* Priority Queue - O(n)
* Visited Set - O(n)


![](./assets/img_submission-LeetCode-NetworkAndTimeDelay.PNG)

## Challenges Faced
Understanding the problem statement posed a challenge for me as this is my first attempt at a problem like this and breaking down the requirements took the most time for me to solve this problem. 

Once I figured out we could use a version of the Dijkstra's algorithm we learned in class the iteration become straighforward.

## Optimizations
* Using a priority queue to efficiently select the node with the minimum priority.
* Using a distances map to keep track of the maximum distance from the starting node to each node.
* Using a previous nodes map to keep track of the shortest path from the starting node to each node