import styled  from '@emotion/styled';
import portfolioData from '../utils/portfolio.json';
import PortfolioList from './portfolioList';

const PortfolioWrapper = styled.div`

`;
const DesTitle = styled.div`
  font-size:30px;
  font-weight: 400;
  margin-bottom: 20px;
  @media (max-width:991px) {
    font-size:22px;
    margin-bottom: 10px;
  }
`

const Portfolio = () => {
    return (
        <PortfolioWrapper>
           <DesTitle>
              作品集 / Portfolio
            </DesTitle>
            {
              portfolioData.map((item,index) => (<PortfolioList name={item.name} des={item.des} webpimg={item.webpimg} jpgpimg={item.jpgpimg} link={item.link} key={item.name}/>))
            }
        </PortfolioWrapper>
       
    );
}

export default Portfolio;