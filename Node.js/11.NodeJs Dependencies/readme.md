# Node.js Dependences

1. V8 Engine

- Converts js code into machine code so that machine can understand.

2. Libuv

- Open source library with a strong focus on asynchronous I/O. Node.js use the libuv library to handle asynchronous I/O operations, such as file system operation, networking and timers.
- features

1. file system events
2. async DNS resolution
3. async file system operations
4. full featured event loop

# Other dependences

1. Lihttp

- Designed to not make any syscalls or allocations.

2. c-ares

- for some asynchronous DNS requests.

3. opesSSL

- Implementations of many cryptographic functions.

4. Zlib

- for fast compression and decompression

# Thread

- Each unit capable of executing code is called a thread. Node.js is single threaded, which means it can only do "one" thing at a time.

# Event Loop

- The event loop will be generated in the thread and the role of this loop is to schedule which operations our thread should be performing at any given point.
  Example:
  <br>
  javascript (someprocess, callback)
  <br>
  if (someprocess === "complete") { callback()}

# Callback

1. callback is an asynchronous equivalent for a function.
2. a callback function is called at the completion of a given task.
3. callback help us in preventing from the blocking of the code.
4. Node makes heavy use of callbacks.
