SELECT COUNT(*) as COUNT
FROM (SELECT *, CONV(GENOTYPE, 10, 2) as t FROM ECOLI_DATA) AS drive
WHERE
    t = "1"
    OR ((t LIKE "%00" OR t LIKE "%01") 
    AND (t LIKE '%100' OR t LIKE '%101' OR t LIKE '%1'))
