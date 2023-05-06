import * as React from "react";

import styled from "@emotion/styled";
import Grid from "@mui/material/Grid";

export const RoomAndThemeType = () => {
  return (
    <Grid
      container
      spacing={2}
      style={{
        marginTop: "0.1rem",
      }}
    >
      <Grid item xs={12} md={6}>
        <ChooseRoom>
          Here's your new <strong>Choosed Room</strong>
        </ChooseRoom>
      </Grid>
      <Grid item xs={12} md={6}>
        <TypedRoom>
          Typed in the
          <strong>Choosed Room Theme!</strong>
        </TypedRoom>
      </Grid>
    </Grid>
  );
};

const ChooseRoom = styled.p`
  color: #ffff;
  text-align: right;
`;

const TypedRoom = styled.p`
  color: #ffff;
`;
