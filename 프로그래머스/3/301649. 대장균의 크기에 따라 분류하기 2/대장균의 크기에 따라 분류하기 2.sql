SELECT ID, 
    CASE 
        WHEN quartile = 1 THEN 'CRITICAL'
        WHEN quartile = 2 THEN 'HIGH'
        WHEN quartile = 3 THEN 'MEDIUM'
        WHEN quartile = 4 THEN 'LOW'
    END AS COLONY_NAME
FROM (SELECT *, 
        NTILE(4) OVER (ORDER BY SIZE_OF_COLONY DESC) AS quartile  
      FROM ECOLI_DATA) AS DATA
ORDER BY ID ASC