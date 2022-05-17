export const globalTypes = {
    padding: {
      name: 'Padding',
      description: 'ストーリー描画時のpaddingを設定します',
      defaultValue: '0px',
      toolbar: {
        icon: 'circlehollow',
        items: ['0px', '30px', '100px']
      }
    }
}
  
export const decorators = [
    (story, context) => ({
      props: {
        padding: {
          type: String,
          default: context.globals.padding
        }
      },
      template: `
        <div :style="{padding: padding}">
          <story />
        </div>
      `
    })
]
  
export const parameters = {
    layout: 'fullscreen'
}