To reproduce the weirdness -- 4 cases.

1. build the container: 
```
docker build -t playwright-crash-repro .        
```

Case 1: Firefox, tracing: 
```
docker run -it playwright-crash-repro npx playwright test -c tracing.config.ts --project firefox --repeat-each 20
```
Behavior: intermittent crashes

Case 2: Firefox, no tracing: 
```
docker run -it playwright-crash-repro npx playwright test --project firefox --repeat-each 20
```
Behavior -- everything works perfectly.

Case 3: Chrome, tracing: 
```
docker run -it playwright-crash-repro npx playwright test -c tracing.config.ts --project chrome --repeat-each 20
```

Behavior -- everything works perfectly.
Case 4: Chrome, no tracing: 
```
docker run -it playwright-crash-repro npx playwright test --project chrome --repeat-each 20
```

Behavior -- everything works perfectly.
