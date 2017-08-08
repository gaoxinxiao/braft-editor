export default {
  height: 500,
  controls: [
    'undo', 'redo', 'split', 'font-size', 'font-family',
    'text-color', 'bold', 'italic', 'underline', 'strike-through',
    'text-align', 'split', 'headings', 'list_ul', 'list_ol',
    'blockquote', 'code', 'split', 'link', 'split', 'media'
  ],
  media: {
    image: true,
    video: false,
    audio: true,
    uploadFn: null,
    sourceFn: null
  }
}