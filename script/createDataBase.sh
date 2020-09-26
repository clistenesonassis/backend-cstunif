docker run --name db-clistal \
-e POSTGRES_PASSWORD=1026427300 \
-e POSTGRES_USER=clistalunif \
-e POSTGRES_BD=clistalunif \
-p 5432:5432 \
-v $(pwd)/db-data:/var/lib/postgresql/data \
-d postgres
