import styled from "@emotion/styled";

function Content0() {
  const Content = styled.div`
    display: flex;
    /* background-color: red; */
    padding: 20px 25px 0;
  `;

  const FullBlock = styled.div`
    width: 100%;
    padding: 0;
    display: flex;
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
      <FullBlock>
        <ImageLink>
          <Image
            src="https://www.zimmermann.com/media/wysiwyg/r24-menu-1.jpg"
            alt=""
          />
          <ImageFooter>Resort RTW, Matchmaker: coming soon</ImageFooter>
        </ImageLink>
        <ImageLink>
          <Image
            src="https://www.zimmermann.com/media/wysiwyg/f23_menu_1.jpg"
            alt=""
          />
          <ImageFooter>Fall RTW 2023, Luminosity</ImageFooter>
        </ImageLink>
        <ImageLink>
          <Image
            src="https://www.zimmermann.com/media/wysiwyg/SS23.jpg"
            alt=""
          />
          <ImageFooter>Summer Swim 2023</ImageFooter>
        </ImageLink>
        <ImageLink>
          <Image
            src="https://www.zimmermann.com/media/wysiwyg/jewellery_1_2.jpg"
            alt=""
          />
          <ImageFooter>Spring RTW 2023, Wonderland</ImageFooter>
        </ImageLink>
      </FullBlock>
    </Content>
  );
}

export default Content0;
