# 跳转url

1. 在js中
    1. 类中使用
        
        ```jsx
        import PropTypes from 'prop-types';
        export default class Header extends Component {
            static contextTypes = { router: PropTypes.object.isRequired };
            constructor(props) {
                super(props);
                this.state = {
                    keyword: '',
                    channelList: [],
                };
                this.handleToSearch = this.handleToSearch.bind(this);
            }
            handleToSearch() {
                if (this.state.keyword) {
                    this.context.router.history.push(`/news_list/search/${this.props.channelId}/${this.state.keyword}`);
                }
            }
            render() {
                return <div className="wrapper"> 小星星小星星 </div>;
            }
        }
        ```
        
    2. 在函数组件中
        
        使用useHistory
        
        ```jsx
        window.location.href = 'https://你的url'
        ```
        
    3. 
2. 在标签中
    1. 跳本项目的url
        
        ```jsx
        <link to={/url}></link>
        // 如果需要在新页面中打开，则加个target='_blank'
        ```
        
    2. 跳外链
        
        ```jsx
        <a href='https://.......'></a>
        // 如果需要在新页面打开，则加个target='_blank', 但是同时需要写rel，例如rel="noopener noreferrer"
        ```
        
    3. 
3.