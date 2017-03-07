import React from 'react';
import ReactDOM from 'react-dom';

const data = [
  {
    author: 'a1',
    comment: 'c1'
  },
  {
    author: 'a2',
    comment: 'c2'
  }
]

function CommentList(props) {
  return (
   <section className='comment-list'>
    <div className="author">作者：{props.author}</div>
    <div className="content">内容：{props.content}</div>
   </section>
  )
}

function CommentBox(props) {
  var CommentWrap = props.data.map((item, idx) => (
    <CommentList key={idx} author={item.author} content={item.comment} />
  ))
  return (
    <div className="comment-box">
      {CommentWrap}
    </div>
  )
}


/*function CommentForm(props) {
     return (
        <form onSubmit={props.handleSubmit}>
          <textarea name="" id="_textarea" cols="30" rows="10"></textarea>
          <button type='submit'>submit!</button>
        </form>
   )
}*/

class CommentForm extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();

    // 更新父组件state
    if (this._textarea.value !== '') {
      this.props.that.setState(
        // 两个参数
        () => (
          this.props.that.state.comments.push({
            author: 'null',
            comment: this._textarea.value
          })
        ),
        () => {
          this._textarea.value = '';
        }
      )
      // 没有延时的话还未更新就被置为空
      // settimeout将这一操作在指定时间重新添加到任务队列
      // setTimeout(function() {
      //   this._textarea.value = '';
      // }, 0)
    }
    this._textarea.focus();
  }
  render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <textarea name="" id="_textarea" cols="30" rows="10" ref={(el) => this._textarea = el}></textarea>
          <button type='submit'>submit!</button>
        </form>
      )
  }
}

export default class Comment extends React.Component {
  constructor() {
    super();
    this.state = {
      comments: data
    };
  }

  render() {
    return (
      <div className="comment">
        {/*只有两个组件引用同一个state，调用setState时才会分别更新*/}
        <CommentBox data={this.state.comments} />
        {/*获取一个该组件实例的指向*/}
        <CommentForm that={this} />
      </div>
    )
  }
}

