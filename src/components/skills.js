import styled  from '@emotion/styled';


const SkillsWrapper = styled.div`
  animation: fade 2s ease forwards;
  @keyframes fade {
    0%{
      opacity: 0;
    }
    100%{
      opacity: 1;
    }
  }
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
const DesBx = styled.div`
  font-size:18px;
  font-weight: 400;
`
const ItemBx = styled.div`
  margin-bottom: 20px;
  div{
    font-size:20px;
    padding-bottom:10px;
    margin-bottom:12px;
    display: block;
    position: relative;
    &::before{
        position: absolute;
        content: '';
        bottom: 0;
        left: 0;
        width: 20px;
        height: 3px;
        background: #000;
    }
  }
`
const Skills = () => {
    return (
        <SkillsWrapper>
           <DesTitle>
                技能 / Skills
            </DesTitle>
            <DesBx>
              <ItemBx>
                <div>HTML、CSS</div>
                <ul>
                    <li>1.符合w3c規範的HTML</li>
                    <li>2.SCSS管理layout樣式、變數、mixin、include</li>
                    <li>3.從0開始製作各類型網站Responsive Web Design</li>
                </ul>
              </ItemBx>
              <ItemBx>
                <div>JavaScript</div>
                <ul>
                    <li>1.JavaScript函式庫jQuery應用</li>
                    <li>2.介接 Restful API</li>
                    <li>3.ECMAScript6語法應用 :<br/>let & const、Template Literals、Destructuring、Arrow Function ... (使用經驗)</li>
                </ul>
              </ItemBx>
              <ItemBx>
                <div>React</div>
                <ul>
                    <li>1.React Hook :<br/>useState、useEffect ...、並使用Props資料傳遞</li>
                    <li>2.搭配emotion框架實現CSS in JS</li>
                    <li>3.React router、React redux搭配Redux Saga串接APIs</li>
                </ul>
              </ItemBx>
              <ItemBx>
                <div>Other</div>
                <ul>
                    <li>Git、Chrome Dev Tool、React Developer Tools、webpack、Eslint、SEO優化觀念</li>
                   
                </ul>
              </ItemBx>
            </DesBx>
        </SkillsWrapper>
       
    );
}

export default Skills;