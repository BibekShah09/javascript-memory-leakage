# Hunting Memory Leakage in JavaScript Application
Garbage Collection is the process by which the program performs automatic memory management by reclaiming the memory occupied by objects that are not used in the program.
Memory leakage is defined as a situation when the memory not needed by the program is not returned to the operating system or pool of free memory.
For more details refer [Hunting Memory Leakage in JavaScript Application](https://medium.com/dev-genius/memory-management-and-hunting-leakage-in-javascript-47fca2527ddf).

## Prerequisites
 [Git](https://git-scm.com/) <br />
 [node](https://v8.dev/docs/d8) <br />
 [npm](https://www.npmjs.com/package/node) <br />
 
 ## Installation
 ```sh
 git clone repo_name # or clone your own fork
 cd repo_name
 rm rf .git
 npm install
 ```

### Hunting Memory Leakage

### 1. Using Node inspector.
 ```sh
 node --inpsect=9229 leakage.js 
 ```
on Chrome Browser open:
 ```sh
 chrome://inspect
 ```
<img src='https://miro.medium.com/max/1400/0*tLlUz8BpfDzCnItk' alt='chrome_inspection'/>
<hr />

Then, load the snapshot

<img src='https://miro.medium.com/max/1400/0*bGo7dZSciESGA4u6'/>

### 2. Using Heap Dump Module and Loading.
 ```sh
 node snapShot/index.js 
 ```
Output file: heapdump-7369622.877796.heapsnapshot

Load the file using chrome inspector
<br />

<img src='https://miro.medium.com/max/1400/1*GbHdNgrC07G9P6-Is4t0Sg.png'/>

### 3. Command Line Options.
 ```sh
 node --expose-gc --trace-gc expose-gc.js 
 ```
For more command line options refer file command-lines.txt

## Author
[Bibek Shah](https://github.com/BibekShah09)

## License
[MIT](https://choosealicense.com/licenses/mit/)

