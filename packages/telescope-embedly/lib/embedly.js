var thumbnailProperty = {
  propertyName: 'thumbnailUrl',
  propertySchema: {
    type: String,
    optional: true,
    autoform: {
      editable: true,
      type: 'bootstrap-postthumbnail'
    }
  }
}
addToPostSchema.push(thumbnailProperty);

var mediaProperty = {
  propertyName: 'media',
  propertySchema: {
    type: Object,
    optional: true,
    blackbox: true,
    hidden: true,
    autoform: {
      omit: true
    }
  }
}
addToPostSchema.push(mediaProperty);

postThumbnail.push({
  template: 'postThumbnail',
  order: 15
});

var embedlyKeyProperty = {
  propertyName: 'embedlyKey',
  propertySchema: {
    type: String,
    optional: true,
    autoform: {
      group: 'embedly',
      private: true
    }
  }
}
Settings.addToSchema(embedlyKeyProperty);

var thumbnailWidthProperty = {
  propertyName: 'thumbnailWidth',
  propertySchema: {
    type: Number,
    optional: true,
    autoform: {
      group: 'embedly'
    }
  }
}
Settings.addToSchema(thumbnailWidthProperty);

var thumbnailHeightProperty = {
  propertyName: 'thumbnailHeight',
  propertySchema: {
    type: Number,
    optional: true,
    autoform: {
      group: 'embedly'
    }
  }
}
Settings.addToSchema(thumbnailHeightProperty);

// add callback that adds "has-thumbnail" or "no-thumbnail" CSS classes
postClassCallbacks.push(function (post, postClass){
  var thumbnailClass = !!post.thumbnailUrl ? "has-thumbnail" : "no-thumbnail";
  return postClass + " " + thumbnailClass;
});
