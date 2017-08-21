insert into factions (
  authID,
  factionName,
  factionAlign,
  factionMantra,
  factionType,
  factionPowers,
  factionHoldings,
  factionDesc,
  factionOrigin
) values ($1, $2, $3, $4, $5, $6, $7, $8, $9);