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
        <BlockTitle>New Arrivals</BlockTitle>
        <List>
          <ListItem>
            <a href="#">All</a>
          </ListItem>
          <ListItem>
            <a href="#">Ready to wear</a>
          </ListItem>
          {/* <ListItem>
            <a href="#">Swim & resort</a>
          </ListItem> */}
          {/* <ListItem>
            <a href="#">New this week</a>
          </ListItem> */}
          {/* <ListItem>
            <a href="#">New kids</a>
          </ListItem> */}
        </List>
      </SmallBlock>
      <SmallBlock>
        <BlockTitle>Edits</BlockTitle>
        <List>
          {/* <ListItem>
            <a href="#">Luminosity</a>
          </ListItem> */}
          {/* <ListItem>
            <a href="#">Form & light</a>
          </ListItem> */}
          {/* <ListItem>
            <a href="#">Best dressed</a>
          </ListItem> */}
          {/* <ListItem>
            <a href="#">Fall frames</a>
          </ListItem> */}
          {/* <ListItem>
            <a href="#">In Denim</a>
          </ListItem> */}
          {/* <ListItem>
            <a href="#">Chase the sun</a>
          </ListItem> */}
          {/* <ListItem>
            <a href="#">Seaside escape</a>
          </ListItem> */}
          <ListItem>
            <a href="#">Empty</a>
          </ListItem>
        </List>
      </SmallBlock>
      <MediumBlock>
        <ImageLink>
          <Image
            src="https://www.zimmermann.com/media/wysiwyg/f23-menu-13.jpg"
            alt=""
          />
          <ImageFooter>Shop new arrivals</ImageFooter>
        </ImageLink>
        <ImageLink>
          <Image
            src="https://www.zimmermann.com/media/wysiwyg/f23-menu-14.jpg"
            alt=""
          />
          <ImageFooter>Explore fall rtv 2023</ImageFooter>
        </ImageLink>
      </MediumBlock>
    </Content>
  );
}

export default Content0;
