To reproduce the weirdness -- 4 cases.

1. build the container: 
```
docker build -t playwright-crash-repro .        
```


Case 1: Firefox, no wait for navigation: 
```
docker run -it playwright-crash-repro npx playwright test -g no-wait --project firefox
```
Behavior -- browser does not wait for the redirect to happen, and so the test fails.

Case 2: Chrome, no wait for navigaiton: 

```
docker run -it playwright-crash-repro npx playwright test -g no-wait --project chrome
```
Behavior -- everything works perfectly.

Case 3: Chrome, wait for navigation: 
```
docker run -it playwright-crash-repro npx playwright test -g reproduction.spec --project chrome
```
Behavior -- waitForNavigation hangs forever and times out

Case 4: Firefox, wait for navigation: 

```
docker run -it playwright-crash-repro npx playwright test -g reproduction.spec --project firefox
```
Behavior -- run is flaky, about half the time we crash because the page gets closed "page.goto: Target page, context or browser has been closed"
