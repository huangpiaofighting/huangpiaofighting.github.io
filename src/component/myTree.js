import $ from 'jquery'
$.hTree = {
  create: function ($container, option) {
    var that = this;
    var callback = function (data, $container) {
      $.each(data, function (index, item) {
        var $dl = that.createEl('dl'),
          $dt = that.createEl('dt', '>'+item.title)
        $dl.append($dt)
        $dt.click(function(){
          $(this).parent().find('dd').toggle(800);
          item.titleClick && item.titleClick() 
        });
        if (item.data && typeof item.data[0] == 'string') {
          $.each(item.data, function (i, itemChild) {
            var $dd1 = that.createEl('dd', itemChild)
            $dd1.click(function(){
              item.dataClick && item.dataClick[i] && item.dataClick[i]()
            })
            $dl.append($dd1)
          })
        } else if (item.data){
          var $dd1 = that.createEl('dd')
          $dd1.addClass('isContainer')
          $dl.append($dd1)
          callback(item.data,$dd1)
        }
        $container.append($dl)
      });
    }
    callback(option.data,$container)
  },
  createEl: function (tag, text) {
    var $el = $('<' + tag + '></' + tag + '>')
    if (text && tag !== 'dl') {
      $el.append(text)
    }
    return $el;
  }
}
$.fn.hTree = function (option) {
  $.hTree.create(this, option);
}
export default $