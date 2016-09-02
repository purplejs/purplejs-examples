package io.purplejs.examples;

import java.lang.management.ManagementFactory;
import java.lang.management.MemoryMXBean;
import java.lang.management.MemoryUsage;
import java.lang.management.OperatingSystemMXBean;

import io.purplejs.core.json.JsonGenerator;
import io.purplejs.core.json.JsonSerializable;

/**
 * System info object that is serialized to "json".
 */
public final class SysInfoJson
    implements JsonSerializable
{
    @Override
    public void serialize( final JsonGenerator gen )
    {
        gen.map();
        addOsInfo( gen );
        addMemoryStats( gen );
        gen.end();
    }

    private void addOsInfo( final JsonGenerator gen )
    {
        final OperatingSystemMXBean bean = ManagementFactory.getOperatingSystemMXBean();

        gen.map( "os" );
        gen.value( "arch", bean.getArch() );
        gen.value( "name", bean.getName() );
        gen.value( "version", bean.getVersion() );
        gen.value( "availableProcessors", bean.getAvailableProcessors() );
        gen.value( "loadAverage", bean.getSystemLoadAverage() );
        gen.end();
    }

    private void addMemoryStats( final JsonGenerator gen )
    {
        final MemoryMXBean bean = ManagementFactory.getMemoryMXBean();

        gen.map( "memory" );
        addMemoryUsage( gen, "heap", bean.getHeapMemoryUsage() );
        addMemoryUsage( gen, "nonHeap", bean.getNonHeapMemoryUsage() );
        gen.end();
    }

    private void addMemoryUsage( final JsonGenerator gen, final String name, final MemoryUsage memory )
    {
        gen.map( name );
        gen.value( "init", memory.getInit() );
        gen.value( "max", memory.getMax() );
        gen.value( "committed", memory.getCommitted() );
        gen.value( "used", memory.getUsed() );
        gen.end();
    }
}
