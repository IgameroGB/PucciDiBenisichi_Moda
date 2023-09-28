import styled from "@emotion/styled";

function Content0() {
  const Content = styled.div`
    display: flex;
    /* background-color: red; */
    padding: 20px 25px 0;
  `;

  const SmallBlock = styled.div`
    width: 25%;
    padding: 0 20px;
  `;

  const MediumBlock = styled.div`
    width: 50%;
    padding: 0;
    display: flex;
  `;

  const BlockTitle = styled.div`
    text-transform: uppercase;
    border-bottom: 1px solid;
    border-color: var(--dark-font);

    color: var(--dark-font);
    font-size: 13px;
    font-weight: bold;
  `;

  const List = styled.ul`
    list-style: none;
    padding: 10px 0;
  `;

  const ListItem = styled.li`
    padding: 5px 0;
    font-size: 12px;
    text-transform: uppercase;
  `;

  const ImageLink = styled.a`
    width: 50%;
  `;
  const Image = styled.img`
    display: block;
    width: 99%;
  `;

  const ImageFooter = styled.span`
    text-transform: uppercase;
    font-size: 9px;
    padding: 5px 0 0;
  `;

  return (
    <Content>
      <SmallBlock>
        <BlockTitle>Accesories</BlockTitle>
        <List>
          <ListItem>
            <a href="#">All</a>
          </ListItem>
          <ListItem>
            <a href="#">Bags</a>
          </ListItem>
          <ListItem>
            <a href="#">Belts</a>
          </ListItem>
          <ListItem>
            <a href="#">Hats</a>
          </ListItem>
          <ListItem>
            <a href="#">Scarves</a>
          </ListItem>
          <ListItem>
            <a href="#">Jewllery</a>
          </ListItem>
        </List>
      </SmallBlock>
      <SmallBlock>
        <BlockTitle>&nbsp;</BlockTitle>
        <List>
          <ListItem>
            <a href="#">Sunglases</a>
          </ListItem>
          <ListItem>
            <a href="#">Towels & Pareos</a>
          </ListItem>
          <ListItem>
            <a href="#">Hair Accesories</a>
          </ListItem>
          <ListItem>
            <a href="#">Keychains</a>
          </ListItem>
          <ListItem>
            <a href="#">Posters</a>
          </ListItem>
        </List>
      </SmallBlock>
      <SmallBlock>
        <BlockTitle>Gifts</BlockTitle>
        <List>
          <ListItem>
            <a href="#">All</a>
          </ListItem>
          <ListItem>
            <a href="#">Gift card</a>
          </ListItem>
          <ListItem>
            <a href="#">Digital Gift Card</a>
          </ListItem>
          <ListItem>
            <a href="#">The Gift Edit</a>
          </ListItem>
        </List>
      </SmallBlock>
      <SmallBlock>
        <ImageLink>
          <Image
            src="https://www.zimmermann.com/media/wysiwyg/accessories-f23.jpg"
            alt=""
          />
          <ImageFooter>Explore Acessories</ImageFooter>
        </ImageLink>
      </SmallBlock>
    </Content>
  );
}

export default Content0;
