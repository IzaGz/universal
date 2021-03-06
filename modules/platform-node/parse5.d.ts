// declare module 'parse5' {
//   export var Parser;
//   export var Serializer;
//   export var TreeAdapters;
// }

declare module 'parse5' {
  export var parse : Function;
  export var parseFragment : Function;
  export var serialize : Function;
  export var treeAdapters: any;

  export var ParserStream: any;
  export var SerializerStream: any;
  export var SAXParser: any;
}
