package org.myapp;

import com.google.gwt.user.client.rpc.SerializationException;
import com.google.gwt.user.client.rpc.SerializationStreamReader;
import com.google.gwt.user.client.rpc.SerializationStreamWriter;
import com.google.gwt.user.client.rpc.impl.ReflectionHelper;

@SuppressWarnings("deprecation")
public class GreetingResponse_FieldSerializer implements com.google.gwt.user.client.rpc.impl.TypeHandler {
  private static native java.lang.String getGreeting(org.myapp.GreetingResponse instance) /*-{
    return instance.@org.myapp.GreetingResponse::greeting;
  }-*/;
  
  private static native void setGreeting(org.myapp.GreetingResponse instance, java.lang.String value) 
  /*-{
    instance.@org.myapp.GreetingResponse::greeting = value;
  }-*/;
  
  private static native java.lang.String getServerInfo(org.myapp.GreetingResponse instance) /*-{
    return instance.@org.myapp.GreetingResponse::serverInfo;
  }-*/;
  
  private static native void setServerInfo(org.myapp.GreetingResponse instance, java.lang.String value) 
  /*-{
    instance.@org.myapp.GreetingResponse::serverInfo = value;
  }-*/;
  
  private static native java.lang.String getUserAgent(org.myapp.GreetingResponse instance) /*-{
    return instance.@org.myapp.GreetingResponse::userAgent;
  }-*/;
  
  private static native void setUserAgent(org.myapp.GreetingResponse instance, java.lang.String value) 
  /*-{
    instance.@org.myapp.GreetingResponse::userAgent = value;
  }-*/;
  
  public static void deserialize(SerializationStreamReader streamReader, org.myapp.GreetingResponse instance) throws SerializationException {
    setGreeting(instance, streamReader.readString());
    setServerInfo(instance, streamReader.readString());
    setUserAgent(instance, streamReader.readString());
    
  }
  
  public static org.myapp.GreetingResponse instantiate(SerializationStreamReader streamReader) throws SerializationException {
    return new org.myapp.GreetingResponse();
  }
  
  public static void serialize(SerializationStreamWriter streamWriter, org.myapp.GreetingResponse instance) throws SerializationException {
    streamWriter.writeString(getGreeting(instance));
    streamWriter.writeString(getServerInfo(instance));
    streamWriter.writeString(getUserAgent(instance));
    
  }
  
  public Object create(SerializationStreamReader reader) throws SerializationException {
    return org.myapp.GreetingResponse_FieldSerializer.instantiate(reader);
  }
  
  public void deserial(SerializationStreamReader reader, Object object) throws SerializationException {
    org.myapp.GreetingResponse_FieldSerializer.deserialize(reader, (org.myapp.GreetingResponse)object);
  }
  
  public void serial(SerializationStreamWriter writer, Object object) throws SerializationException {
    org.myapp.GreetingResponse_FieldSerializer.serialize(writer, (org.myapp.GreetingResponse)object);
  }
  
}
