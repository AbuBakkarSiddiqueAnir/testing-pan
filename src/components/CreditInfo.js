import * as React from "react";

import styled from "@emotion/styled";
import Grid from "@mui/material/Grid";

export const CreditInfo = () => {
  return (
    <Grid
      container
      spacing={2}
      style={{
        marginTop: "0.1rem",
      }}
    >
      <Grid item xs={12} md={6}>
        <RemainingCredit>
          Remaining credits: <strong>1000</strong>
        </RemainingCredit>
      </Grid>
      <Grid item xs={12} md={6}>
        <RenewalDuration>
          Renewal in <strong>30 Hours 15 Minutes</strong>
        </RenewalDuration>
      </Grid>
    </Grid>
  );
};

const RemainingCredit = styled.p`
  color: #ffff;
  text-align: right;
  font-size: 18px;
`;

const RenewalDuration = styled.p`
  color: #ffff;
  font-size: 18px;
`;
