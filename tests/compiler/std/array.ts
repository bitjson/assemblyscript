import "allocator/arena";

var arr = changetype<i32[]>(allocate_memory(sizeof<usize>() + 2 * sizeof<i32>()));

assert(arr.length == 0);
assert(arr.__capacity == 0);

arr.push(42);

assert(arr[0] == 42);
assert(arr.length == 1);
assert(arr.__capacity == 1);

var i = arr.pop();

assert(i == 42);
assert(arr.length == 0);
assert(arr.__capacity == 1);

arr.push(43);

assert(arr.length == 1);
assert(arr.__capacity == 1);
assert(arr[0] == 43);

arr.push(44);

assert(arr.length == 2);
assert(arr.__capacity == 2);
assert(arr[0] == 43);
assert(arr[1] == 44);

arr.push(45);

assert(arr.length == 3);
assert(arr.__capacity == 4);
assert(arr[0] == 43);
assert(arr[1] == 44);
assert(arr[2] == 45);

arr.unshift(42);

assert(arr.length == 4);
assert(arr.__capacity == 4);
assert(arr[0] == 42);
assert(arr[1] == 43);
assert(arr[2] == 44);
assert(arr[3] == 45);

arr.unshift(41);

assert(arr.length == 5);
assert(arr.__capacity == 8);
assert(arr[0] == 41);
assert(arr[1] == 42);
assert(arr[2] == 43);
assert(arr[3] == 44);
assert(arr[4] == 45);

i = arr.shift();

assert(i == 41);
assert(arr.length == 4);
assert(arr.__capacity == 8);
assert(arr[0] == 42);
assert(arr[1] == 43);
assert(arr[2] == 44);
assert(arr[3] == 45);

i = arr.pop();

assert(i == 45);
assert(arr.length == 3);
assert(arr.__capacity == 8);
assert(arr[0] == 42);
assert(arr[1] == 43);
assert(arr[2] == 44);

arr.reverse();

assert(arr.length == 3);
assert(arr.__capacity == 8);
assert(arr[0] == 44);
assert(arr[1] == 43);
assert(arr[2] == 42);

arr.push(43);
arr.push(44);

i = arr.indexOf(44);

assert(i == 0);

i = arr.indexOf(42);

assert(i == 2);

i = arr.indexOf(45);

assert(i == - 1);

i = arr.indexOf(43, 100);

assert(i == - 1);

i = arr.indexOf(43, -100);

assert(i == 1);

i = arr.indexOf(43, -2);

assert(i == 3);

i = arr.indexOf(43, -4);

assert(i == 1);

i = arr.indexOf(43, 0);

assert(i == 1);

i = arr.indexOf(43, 1);

assert(i == 1);

i = arr.indexOf(43, 2);

assert(i == 3);

var includes = arr.includes(44);

assert(includes == true);

includes = arr.includes(42);

assert(includes == true);

includes = arr.includes(45);

assert(includes == false);

includes = arr.includes(43, 100);

assert(includes == false);

includes = arr.includes(43, -100);

assert(includes == true);

includes = arr.includes(43, -2);

assert(includes == true);

includes = arr.includes(43, -4);

assert(includes == true);

includes = arr.includes(43, 0);

assert(includes == true);

includes = arr.includes(43, 1);

assert(includes == true);

includes = arr.includes(43, 2);

assert(includes == true);

arr.splice(1, 1);

assert(arr.length == 4);
assert(arr.__capacity == 8);
assert(arr[0] == 44);
assert(arr[1] == 42);
