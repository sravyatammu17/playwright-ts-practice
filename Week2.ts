// Write a class TestRunner with a constructor taking title: string and shouldSucceed: boolean.
// Add a method run(): void that logs "Running: {title}".
// Add a second method getResult(): string that returns "PASS" or "FAIL" based on shouldSucceed.
// Create two instances and call both methods on each

class TestRunner {
  title: string;
  shouldSucceed: boolean;

  constructor(title: string, shouldSucceed: boolean) {
    this.title = title;
    this.shouldSucceed = shouldSucceed;
  }

  run(): void {
    console.log(`Running: ${this.title}`);
  }

  getResult(): string {
    return this.shouldSucceed ? "PASS" : "FAIL";
  }
}
const test1 = new TestRunner("Valid login test", true);
const test2 = new TestRunner("Invalid password test", false);

test1.run();
console.log(test1.getResult());

test2.run();
console.log(test2.getResult());