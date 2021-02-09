# cloudant-lab-01

### Build docker
```
docker build -t cloudant-lab .
```

### Run docker with environment variables
```
docker run -e CLOUDANT_URL=your-valud -e CLOUDANT_API_KEY=your-value -p 3000:3000 cloudant-lab
```
