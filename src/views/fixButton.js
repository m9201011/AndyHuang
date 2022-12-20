import styled  from '@emotion/styled';

const FixButtonWrapper = styled.div`
    position: fixed;
    display: block;
    top: 50%;
    transform: translateY(-50%);
    right: 50px;
    a{
        font-size: 20px;
        color:#000;
        display: block;
        text-align: right;
        position: relative;
        @media (min-width:992px) {
            &:hover{
                color:#004B97;
                &:before{
                    width: 20px;
                }
            }
        }
        
        &:not(:last-child){
            margin-bottom:20px;
        }

        &.active{
            color:#004B97;
            &:before{
                width: 20px;
            }
        }

        &:before{
            position: absolute;
            content: '';
            bottom: 0;
            right: 0;
            width: 0px;
            height: 3px;
            background: #004B97;
            transition: .4s ease;
        }
    }
    @media (max-width:991px) {
        top:0;
        left:0;
        transform:none;
        width:100%;
        height:70px;
        padding:0 30px;
        background: #fff;
        display:flex;
        align-items: center;
        justify-content: space-between;
        a{
            &:not(:last-child){
                margin-bottom:0px;
                margin-right: 15px;
            }
        }
    }
    @media (max-width:360px) {
        a{
            font-size: 18px;
        }
    }
`;

const FixButton = ({pageChange,currentPage}) => {
    const url = null;

    return (
        <FixButtonWrapper>
            {
                currentPage === 'Work' 
                ? <a className='active' href={url} onClick={pageChange('Work')}>Work Experience</a> 
                : <a href={url} onClick={pageChange('Work')}>Work Experience</a>
            }
            {
                currentPage === 'Skills' 
                ? <a className='active' href={url} onClick={pageChange('Skills')}>Skills</a> 
                : <a href={url} onClick={pageChange('Skills')}>Skills</a>
            }
            {
                currentPage === 'Portfolio' 
                ? <a className='active' href={url} onClick={pageChange('Portfolio')}>Portfolio</a> 
                : <a href={url} onClick={pageChange('Portfolio')}>Portfolio</a>
            }
            {/* <a href={url} onClick={pageChange('Work')}>Work Experience</a> */}
            {/* <a href={url} onClick={pageChange('Skills')}>Skills</a>
            <a href={url} onClick={pageChange('Portfolio')}>Portfolio</a> */}
        </FixButtonWrapper>
    )
}

export default FixButton;