package io.purplejs.examples;

/**
 * Java object that is created from JavaScript.
 */
public final class SysInfoBean
{
    /**
     * Returns the system info as json-like structure.
     *
     * @return the system info.
     */
    public SysInfoJson getInfo()
    {
        return new SysInfoJson();
    }
}
