import { Link } from "react-router-dom";
import FooterForm from "./FooterForm";

import styled from "@emotion/styled";

const FooterContainer = styled.footer`
  width: 100%;
  /* padding: 0 25px; */
  background-color: var(--light-background);
`;

const Container = styled.div`
  display: flex;
  margin: 0 19.5px;
  padding: 15px 22px;
`;

const SmallBock = styled.div`
  padding: 0 5px;
  width: 17%;
`;

const BigBlock = styled.div`
  width: calc(100% - (17 * 4%));
`;

const Title = styled.span`
  display: block;
  margin: 0 0 7px;
  padding: 0 0 5px;
  font-size: 10px;
  border-bottom: 1px solid var(--light-font);
  text-transform: uppercase;
  font-weight: bold;
`;

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const ListItem = styled.li`
  padding: 3px 8px 3px 0;
`;

const ListLink = styled(Link)`
  font-size: 10px;
  text-transform: uppercase;
`;

const Footer = () => {
  return (
    <FooterContainer id="footer">
      <Container>
        <SmallBock>
          <Title>Shop</Title>
          <List>
            <ListItem>
              <ListLink to={"/NewArrivals"}>New arrivals</ListLink>
            </ListItem>
            {/* <ListItem>
              <ListLink>The edit</ListLink>
            </ListItem> */}
            <ListItem>
              <ListLink>Ready to wear</ListLink>
            </ListItem>
            {/* <ListItem>
              <ListLink>Swim & resort</ListLink>
            </ListItem> */}
            {/* <ListItem>
              <ListLink>Accesories</ListLink>
            </ListItem> */}
            {/* <ListItem>
              <ListLink>Stores</ListLink>
            </ListItem> */}
          </List>
        </SmallBock>

        <SmallBock>
          <Title>Help</Title>
          <List>
            <ListItem>
              <ListLink>Orders & shipping</ListLink>
            </ListItem>
            <ListItem>
              <ListLink>Returns policy</ListLink>
            </ListItem>
            <ListItem>
              <ListLink>Submit a return request</ListLink>
            </ListItem>
            <ListItem>
              <ListLink>Faqs</ListLink>
            </ListItem>
            <ListItem>
              <ListLink>Contact us</ListLink>
            </ListItem>
            <ListItem>
              <ListLink>Size guide</ListLink>
            </ListItem>
            {/* <ListItem>
              <ListLink>Brand protection</ListLink>
            </ListItem> */}
          </List>
        </SmallBock>

        <SmallBock>
          <Title>About</Title>
          <List>
            <ListItem>
              <ListLink>Our Story</ListLink>
            </ListItem>
            <ListItem>
              <ListLink>Sustanibility</ListLink>
            </ListItem>
            <ListItem>
              <ListLink>Careers</ListLink>
            </ListItem>
            <ListItem>
              <ListLink>Accesibility</ListLink>
            </ListItem>
            <ListItem>
              <ListLink>Accesibility Statement</ListLink>
            </ListItem>
            <ListItem>
              <ListLink>Privacy</ListLink>
            </ListItem>
          </List>
        </SmallBock>

        <SmallBock>
          <Title>Follow Us</Title>
          <List>
            <ListItem>
              <ListLink>Instagram</ListLink>
            </ListItem>
            <ListItem>
              <ListLink>Facebook</ListLink>
            </ListItem>
            <ListItem>
              <ListLink>Twitter</ListLink>
            </ListItem>
            <ListItem>
              <ListLink>Pinterest</ListLink>
            </ListItem>
            <ListItem>
              <ListLink>Youtube</ListLink>
            </ListItem>
            <ListItem>
              <ListLink>Weibo</ListLink>
            </ListItem>
            <ListItem>
              <ListLink>Wechat</ListLink>
            </ListItem>
          </List>
        </SmallBock>

        <BigBlock>
          <Title>Join Us</Title>
          <FooterForm />
        </BigBlock>
      </Container>
    </FooterContainer>
  );
};

export default Footer;
