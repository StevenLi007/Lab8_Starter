# Lab 8 - Starter

## Check your understanding
1. Within a Github action that runs whenever code is pushed because you want to make sure the code is automatically checked for correctness every time it is updated, not when all the code is written, as it is much harder to locate the cause of potential errors that way. We also want to use automated testing, so we should not manually test on our local machine.
2. We should not use E2E tests for a single function, as E2E tests are more concerned about an entire user action, which may involve many functions. Hence, an error in a E2E test does not specify the error of a single function.
3. No, since the message feature involves multiple including sending and receiving the message, hence unit-testing may not be conclusive. For example, even if the send module works as intended, it does not mean that the recipient will see the message correctly.
4. Yes, since the max message length feature can be controlled by a single module, it is easy to test whether the module works as intended when the message length is below, at, or above 80 characters.