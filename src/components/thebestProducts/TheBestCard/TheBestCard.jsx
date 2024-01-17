import { Card, CardMedia, Typography } from "@mui/material"

const TheBestCard = ({ imgUrl, name }) => {
  return (
    <div>
      <Card sx={{ maxWidth: 164, width: "100%", p: "20px", }}>
        <CardMedia
          component="img"
          sx={{
            objectFit: "contain",
            width: "124px",
            p: "20px",
            borderRadius: "12px",
          }}
          height="124px"
          image={imgUrl}
          alt="" />
      </Card>
      <Typography component={"h3"} mt={"16px"} textAlign={"center"}>{name}</Typography>
    </div>
  )
}

export default TheBestCard
