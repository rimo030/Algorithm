SELECT COUNT(*) as COUNT
FROM (SELECT *, CONV(GENOTYPE, 10, 2) as c FROM ECOLI_DATA) AS drive
WHERE
    c = "1"
    OR ((c LIKE "%00" OR c LIKE "%01") 
    AND (c LIKE '%100' OR c LIKE '%101' OR c LIKE '%1'))