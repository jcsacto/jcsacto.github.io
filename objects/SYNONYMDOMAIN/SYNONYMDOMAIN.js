mos = {
    "objectName": "SYNONYMDOMAIN",
    "className": "psdi.app.system.MXValueSet",
    "description": "Definition of synonym value domain",
    "longDescription": null,
    "isView": false,
    "isInternal": true,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "SYNONYMDOMAINID",
    "primaryKeyColumns": [
        "DOMAINID",
        "MAXVALUE",
        "VALUE",
        "SITEID",
        "ORGID"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "MAXDOMAIN",
            "targetObject": "SYNONYMDOMAIN",
            "parentKeys": "DOMAINID",
            "targetKeys": "DOMAINID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Synonym Domain Details",
            "longDescription": null
        },
        {
            "objectName": "ORGANIZATION",
            "targetObject": "SYNONYMDOMAIN",
            "parentKeys": "ORGID",
            "targetKeys": "ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Organization for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "SYNONYMDOMAIN",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "DOMAINID",
            "required": true,
            "persistent": true,
            "title": "Domain",
            "remarks": "Identifier of the domain",
            "sameAsAttribute": "DOMAINID",
            "sameAsObject": "MAXDOMAIN"
        },
        {
            "attributeName": "MAXVALUE",
            "required": true,
            "persistent": true,
            "title": "Internal Value",
            "remarks": "Internal maximo value",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "VALUE",
            "required": true,
            "persistent": true,
            "title": "Value",
            "remarks": "Synonym value",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DESCRIPTION",
            "required": false,
            "persistent": true,
            "title": "Description",
            "remarks": "Description of the value",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DEFAULTS",
            "required": true,
            "persistent": true,
            "title": "Default",
            "remarks": "Is This The Default Value? (Y or N)",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SITEID",
            "required": false,
            "persistent": true,
            "title": "Site",
            "remarks": "Identifier of the site for which the domain value is specified",
            "sameAsAttribute": "SITEID",
            "sameAsObject": "SITE"
        },
        {
            "attributeName": "ORGID",
            "required": false,
            "persistent": true,
            "title": "Organization",
            "remarks": "Identifier of the org for which the domain value is specified",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION"
        },
        {
            "attributeName": "SYNONYMDOMAINID",
            "required": true,
            "persistent": true,
            "title": "SYNONYMDOMAINID",
            "remarks": "Unique Identifier",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "VALUEID",
            "required": true,
            "persistent": true,
            "title": "Value ID",
            "remarks": "System generated unique identifier of the value in a domain, internal and cannot be modified.",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "MAXDOMAIN",
            "target": "MAXDOMAIN",
            "remarks": "Relationship to MaxDomain table. (maxdomain.domainid = alndomainvalue.domainid and maxdomain.domaintype in (select valuelist.value from valuelist where valuelist.listname = 'DOMTYPE' and valuelist.maxvalue = 'VALUELIST')). The result set will contain one object.",
            "whereClause": "domainid = :domainid and domaintype in (select value from synonymdomain where domainid = 'DOMTYPE' and maxvalue = 'SYNONYM')",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXDOMVALCOND",
            "target": "MAXDOMVALCOND",
            "remarks": "Relationship from SYNONYMDOMAIN to MAXDOMVALCOND",
            "whereClause": "domainid = :domainid and valueid = :valueid",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "REASONCODE",
            "source": "AMCREWAVAIL",
            "remarks": "Relationship to REASONCODE.",
            "whereClause": "domainid='RSNCODE' and value=:reasoncode",
            "cardinality": null
        },
        {
            "name": "STATUSDESC",
            "source": "AMCREWCHNGST",
            "remarks": "Relationship to synonymdomain table, used to find description for the status, it will contain one object.",
            "whereClause": "domainid='CREWSTATUS' and value=:status and :&DOMAINFILTER&_STATUS",
            "cardinality": null
        },
        {
            "name": "SYNONYMDOMAIN",
            "source": "AMCREWT",
            "remarks": "Relationship to get status description field in the change status dialog box.",
            "whereClause": "domainid='CREWTSTATUS' and value=:status",
            "cardinality": null
        },
        {
            "name": "STATUSDESC",
            "source": "ASSET",
            "remarks": "Relationship to synonymdomain table, used to find description for the status, it will contain one object.",
            "whereClause": "domainid='LOCASSETSTATUS' and value=:status and :&DOMAINFILTER&_STATUS",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SYNONYMDOMAIN",
            "source": "ASSETLOCCOMM",
            "remarks": null,
            "whereClause": "domainid='ASSETTYPE' and value=:assettype",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "AVERAGECALCMETHOD",
            "source": "ASSETMETER",
            "remarks": "Relationship from AssetMeter to Synonymdomain to get the description for the assetmeter's average calculation method",
            "whereClause": "domainid='AVERAGEMETHOD' and value=:avgcalcmethod",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "STATUSDESC",
            "source": "AUTOSCRIPT",
            "remarks": "Relationship to synonym domain table, used to find description for the state, it will contain one object.",
            "whereClause": "domainid='AUTOSCRPHASE' and value=:status",
            "cardinality": null
        },
        {
            "name": "REASONCODE",
            "source": "CALENDARBREAK",
            "remarks": "Relationship to the synonymdomain table to get the break description.",
            "whereClause": "domainid='RSNCODE' and value=:breaktype",
            "cardinality": null
        },
        {
            "name": "SYNONYMDOMAIN",
            "source": "COMMODITIES",
            "remarks": null,
            "whereClause": "domainid='SERVICETYPE' and value=:servicetype",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "STATUSDESC",
            "source": "COMMTEMPLATE",
            "remarks": "Relationship to get description of current status.",
            "whereClause": "domainid='COMMTMPLTSTATUS' and value=:status and :&DOMAINFILTER&_STATUS",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "COMPACCDEFTYPE",
            "source": "COMPANYACCDEF",
            "remarks": null,
            "whereClause": "value = :type and domainid = 'COMPTYPE'",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "STARTINGPOINT",
            "source": "DEPRECIATION",
            "remarks": "Relationship to get the Depreciation Starting Point",
            "whereClause": "domainid = 'DEPSTARTINGPOINT' and value = :STARTINGPOINT",
            "cardinality": null
        },
        {
            "name": "EXPECTEDLIFEUOM",
            "source": "DEPSCHED",
            "remarks": "Relationship to get THE Period Units",
            "whereClause": "domainid = 'DEPEXPLIFEUOM' and value = :EXPECTEDLIFEUOM",
            "cardinality": null
        },
        {
            "name": "CALCDAY",
            "source": "DEPSCHED",
            "remarks": "Relationship to get The Calculation Day",
            "whereClause": "domainid = 'DEPCALCDAY' and value = :CALCDAY",
            "cardinality": null
        },
        {
            "name": "DEPMETHOD",
            "source": "DEPSCHED",
            "remarks": "Description of specified depreciation method",
            "whereClause": "domainid='DEPMETHOD' and value=:method",
            "cardinality": null
        },
        {
            "name": "DEPPERIODTYPE",
            "source": "DEPSCHED",
            "remarks": "Description of specified depreciation period type",
            "whereClause": "domainid='DEPPERIODTYPE' and value=:periodtype",
            "cardinality": null
        },
        {
            "name": "CALCDAY",
            "source": "DEPSCHEDHISTORY",
            "remarks": "Relationship to get The Calculation Day",
            "whereClause": "domainid = 'DEPCALCDAY' and value = :CALCDAY",
            "cardinality": null
        },
        {
            "name": "DEPMETHOD",
            "source": "DEPSCHEDHISTORY",
            "remarks": "Description of specified depreciation method",
            "whereClause": "domainid='DEPMETHOD' and value=:method",
            "cardinality": null
        },
        {
            "name": "DEPPERIODTYPE",
            "source": "DEPSCHEDHISTORY",
            "remarks": "Description of specified depreciation period type",
            "whereClause": "domainid='DEPPERIODTYPE' and value=:periodtype",
            "cardinality": null
        },
        {
            "name": "EXPECTEDLIFEUOM",
            "source": "DEPSCHEDHISTORY",
            "remarks": "Relationship to get THE Period Units",
            "whereClause": "domainid = 'DEPEXPLIFEUOM' and value = :EXPECTEDLIFEUOM",
            "cardinality": null
        },
        {
            "name": "STATUSDESC",
            "source": "DMPACKAGEDEF",
            "remarks": "Relationship to synonymdomain table, used to find description for the status, it will contain one object. ",
            "whereClause": "domainid='DMPKGDEFSTATUS' and value=:status and :&DOMAINFILTER&_STATUS",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "STATUSDESC",
            "source": "FEATURES",
            "remarks": "Relationship to SYNONYMDOMAIN.",
            "whereClause": "domainid='FEATURESTATUS' and value=:status and :&DOMAINFILTER&_STATUS",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "STATUSDESC",
            "source": "INCIDENT",
            "remarks": "Relationship to synonymdomain table, used to find description for the status, it will contain one object.",
            "whereClause": "domainid='INCIDENTSTATUS' and value=:status and :&DOMAINFILTER&_STATUS",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "STATUSDESC",
            "source": "INVCHANGESTATUS",
            "remarks": "Relationship to synonymdomain table, used to find description for the status, it will contain one object.",
            "whereClause": "domainid='ITEMSTATUS' and value=:itemstatus and :&DOMAINFILTER&_STATUS",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "STATUSDESC",
            "source": "INVOICE",
            "remarks": "Relationship to synonymdomain table, used to find description for the status, it will contain one object.",
            "whereClause": "domainid='IVSTATUS' and value=:status and :&DOMAINFILTER&_STATUS",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "INVUSECHANGESTATUS",
            "source": "INVUSECHANGESTATUS",
            "remarks": "Relationship to synonymdomain table, used to find description for the status, it will contain one object.",
            "whereClause": "domainid='INVUSESTATUS' and value=:invusestatus",
            "cardinality": null
        },
        {
            "name": "STATUSDESC",
            "source": "INVUSECHANGESTATUS",
            "remarks": "Relationship to synonymdomain table, used to find description for the status, it will contain one object.",
            "whereClause": "domainid='INVUSESTATUS' and value=:invusestatus",
            "cardinality": null
        },
        {
            "name": "STATUSDESC",
            "source": "ITEMCHANGESTATUS",
            "remarks": "Relationship to synonymdomain table, used to find description for the status, it will contain one object.",
            "whereClause": "domainid='ITEMSTATUS' and value=:itemstatus and :&DOMAINFILTER&_STATUS",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "STATUSDESC",
            "source": "ITEMORGCHGSTATUS",
            "remarks": "Relationship to synonymdomain table, used to find description for the status, it will contain one object.",
            "whereClause": "domainid='ITEMSTATUS' and value=:itemstatus and :&DOMAINFILTER&_STATUS",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "STATUSDESC",
            "source": "JOBPLAN",
            "remarks": "Relationship to SYNONYMDOMAIN.",
            "whereClause": "domainid='JOBPLANSTATUS' and value=:status and :&DOMAINFILTER&_STATUS",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WOCLASSDESC",
            "source": "JOBPLANCLASS",
            "remarks": "Relationship to synonymdomain table, used to find description for the woclass, it will contain one object",
            "whereClause": "domainid='WOCLASS' and value=:woclass",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "STATUSDESC",
            "source": "LABOR",
            "remarks": "Relationship from Labor to Synonymdomain to get the description of the status.",
            "whereClause": "domainid='LABORSTATUS' and value=:status and :&DOMAINFILTER&_STATUS",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "STATUSDESC",
            "source": "LABORQUAL",
            "remarks": "Relationship from LaborQual to Synonymdomain to get the description of the status.",
            "whereClause": "domainid='QUALSTAT' and value=:status and :&DOMAINFILTER&_STATUS",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "STATUSDESC",
            "source": "LABORVIEW",
            "remarks": "Relationship to synonymdomain table, used to find description for the status, it will contain one object.",
            "whereClause": "domainid='CONTRACTSTATUS' and value=:status and :&DOMAINFILTER&_STATUS",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "STATUSDESC",
            "source": "LEASEVIEW",
            "remarks": "Relationship to synonymdomain table, used to find description for the status, it will contain one object.",
            "whereClause": "domainid='CONTRACTSTATUS' and value=:status and :&DOMAINFILTER&_STATUS",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "AVERAGECALCMETHOD",
            "source": "LOCATIONMETER",
            "remarks": "Relationship from LocationMeter to Synonymdomain to get the description for the locationmeter's average calculation method",
            "whereClause": "domainid='AVERAGEMETHOD' and value=:avgcalcmethod",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "STATUSDESC",
            "source": "LOCATIONS",
            "remarks": "Relationship to synonymdomain table, used to find description for the status, it will contain one object.",
            "whereClause": "domainid='LOCASSETSTATUS' and value=:status and :&DOMAINFILTER&_STATUS",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "STATUSDESC",
            "source": "MASTERVIEW",
            "remarks": "Relationship to synonymdomain table, used to find description for the status, it will contain one object.",
            "whereClause": "domainid='CONTRACTSTATUS' and value=:status and :&DOMAINFILTER&_STATUS",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SYNONYMDOMAIN",
            "source": "MAXDOMAIN",
            "remarks": "SYNONYMDOMAIN record",
            "whereClause": "domainid=:domainid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "STATUSDESC",
            "source": "MAXUSER",
            "remarks": "Relationship from MaxUser to SynonymDomain for status description",
            "whereClause": "domainid ='MAXUSERSTATUS' and value = :status and :&DOMAINFILTER&_STATUS",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "READINGTYPE",
            "source": "METER",
            "remarks": "Relationship from Meter to Synonymdomain to get the description for the meter's readingtype",
            "whereClause": "domainid='READINGTYPE' and value=:readingtype",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "METERTYPE",
            "source": "METER",
            "remarks": "Relationship from Meter to Synonymdomain to get the description for the meter's metertype",
            "whereClause": "domainid='METERTYPE' and value=:metertype",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "REASONCODE",
            "source": "MODAVAIL",
            "remarks": "Relationship from modavail to reasoncode.",
            "whereClause": " domainid='RSNCODE' and value=:reasoncode",
            "cardinality": null
        },
        {
            "name": "STATUSDESC",
            "source": "MR",
            "remarks": "Relationship to synonymdomain table, used to find description for the status, it will contain one object.",
            "whereClause": "domainid='MRSTATUS' and value=:status and :&DOMAINFILTER&_STATUS",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "STATUSDESC",
            "source": "PERSON",
            "remarks": "Relationship from Person to Synonymdomain to get the description of the status.",
            "whereClause": "domainid='PERSONSTATUS' and value=:status and :&DOMAINFILTER&_STATUS",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "TIMEZONE",
            "source": "PERSON",
            "remarks": "Relationship from Person to Synonymdomain to get the description of locale.",
            "whereClause": "domainid='TIMEZONE' and value=:timezone",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "REASONCODE",
            "source": "PERSONAVAIL",
            "remarks": "Relationship to the synonym domain table to get reasoncode description.",
            "whereClause": "domainid='RSNCODE' and value=:reasoncode",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PLUSCTPSTATUSDESC",
            "source": "PLUSCTEMPLATE",
            "remarks": "Relationship to synonymdomain table, used to find description for the status",
            "whereClause": "domainid = 'PLUSCTPSTATUS' and value = :status",
            "cardinality": null
        },
        {
            "name": "ASSETTYPE",
            "source": "PLUSCTEMPLATE",
            "remarks": "description of specified asset type attribute",
            "whereClause": "domainid = 'ASSETTYPE' and value = :assettype",
            "cardinality": null
        },
        {
            "name": "AVERAGEMETHOD",
            "source": "PLUSCTPMETER",
            "remarks": "description of specified avgcalcmethod attribute",
            "whereClause": "domainid = 'AVERAGEMETHOD' and value = :avgcalcmethod",
            "cardinality": null
        },
        {
            "name": "STATUSDESC",
            "source": "PM",
            "remarks": "Relationship to synonymdomain table, used to find description for the status, it will contain one object.",
            "whereClause": "domainid='PMSTATUS' and value=:status and :&DOMAINFILTER&_STATUS",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "STATUSDESC",
            "source": "PO",
            "remarks": "Relationship to synonymdomain table, used to find description for the status, it will contain one object.",
            "whereClause": "domainid='POSTATUS' and value=:status and :&DOMAINFILTER&_STATUS",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SYNONYMDOMAIN",
            "source": "PORTLETDISPLAY",
            "remarks": "Relationship to the return the maxvalue of a given express for portlet display. The result set will contain one object.",
            "whereClause": "domainid='EXPRESSION' and value = :expression",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "STATUSDESC",
            "source": "PR",
            "remarks": "Relationship to synonymdomain table, used to find description for the status, it will contain one object.",
            "whereClause": "domainid='PRSTATUS' and value=:status and :&DOMAINFILTER&_STATUS",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "STATUSDESC",
            "source": "PROBLEM",
            "remarks": "Relationship to synonymdomain table, used to find description for the status, it will contain one object.",
            "whereClause": "domainid='PROBLEMSTATUS' and value=:status and :&DOMAINFILTER&_STATUS",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "STATUSDESC",
            "source": "PURCHVIEW",
            "remarks": "Relationship to synonymdomain table, used to find description for the status, it will contain one object.",
            "whereClause": "domainid='CONTRACTSTATUS' and value=:status and :&DOMAINFILTER&_STATUS",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "STATUSDESC",
            "source": "QUALIFICATION",
            "remarks": "Relationship from Qualification to Synonymdomain to get the description of the status.",
            "whereClause": "domainid='QUALSTATUS' and value=:status and :&DOMAINFILTER&_STATUS",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "TIMEZONE",
            "source": "REPORTPROCRESERVE",
            "remarks": "Time zone domain values for ReportProcReserve",
            "whereClause": "domainid='TIMEZONE' and value=:timezone",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "STATUSDESC",
            "source": "RFQ",
            "remarks": "Relationship to synonymdomain table, used to find description for the status, it will contain one object.",
            "whereClause": "domainid='RFQSTAT' and value=:status and :&DOMAINFILTER&_STATUS",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "STADDRDIRPRFX",
            "source": "SERVICEADDRESS",
            "remarks": "Street Direction Prefix domain value for Service Address",
            "whereClause": "domainid = 'STREETDIR' and value = :staddrdirprfx",
            "cardinality": null
        },
        {
            "name": "STADDRDIRSFX",
            "source": "SERVICEADDRESS",
            "remarks": "Street Direction Suffix domain value for Service Address",
            "whereClause": "domainid = 'STREETDIR' and value = :staddrdirsfx",
            "cardinality": null
        },
        {
            "name": "TIMEZONE",
            "source": "SERVICEADDRESS",
            "remarks": "Time Zone domain value for Service Address",
            "whereClause": "domainid = 'TIMEZONE' and value = :timezone",
            "cardinality": null
        },
        {
            "name": "STATUSDESC",
            "source": "SFWVIEW",
            "remarks": "Relationship to synonymdomain table, used to find description for the status, it will contain one object.",
            "whereClause": "domainid='CONTRACTSTATUS' and value=:status and :&DOMAINFILTER&_STATUS",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DAYSYNONYM",
            "source": "SHIFTPATTERNDAY",
            "remarks": "Relationship to the synonymdomain table on shiftpatternday.",
            "whereClause": "domainid = 'DAYNAME' and maxvalue = :patterndayseq",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "STATUSDESC",
            "source": "SKDPROJECT",
            "remarks": "Relationship to synonymdomain table, used to find description for the status, it will contain one object.",
            "whereClause": "domainid='SCHDSTATUS' and value=:status and :&DOMAINFILTER&_STATUS",
            "cardinality": null
        },
        {
            "name": "STATUSDESC",
            "source": "SLA",
            "remarks": "Relationship to synonymdomain table, used to find description for the status, it will contain one object.",
            "whereClause": "domainid='SLASTATUS' and value=:status and :&DOMAINFILTER&_STATUS",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SYNONYMDOMAIN",
            "source": "SLAASSETLOC",
            "remarks": "SLAAssetLoc to Synonymdomain relation",
            "whereClause": "domainid='ASSETTYPE' and value=:assettype",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "STATUSDESC",
            "source": "SOLUTION",
            "remarks": "Relationship to synonymdomain table, used to find description for the status, it will contain one object.",
            "whereClause": "domainid='SOLUTIONSTATUS' and value=:status and :&DOMAINFILTER&_STATUS",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "STATUSDESC",
            "source": "SR",
            "remarks": "Relationship to synonymdomain table, used to find description for the status, it will contain one object.",
            "whereClause": "domainid='SRSTATUS' and value=:status and :&DOMAINFILTER&_STATUS",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "STADDRDIRPRFX",
            "source": "TKSERVICEADDRESS",
            "remarks": "Street Direction Prefix domain value for Service Address",
            "whereClause": "domainid = 'STREETDIR' and value = :staddrdirprfx",
            "cardinality": null
        },
        {
            "name": "STADDRDIRSFX",
            "source": "TKSERVICEADDRESS",
            "remarks": "Street Direction Suffix domain value for Service Address",
            "whereClause": "domainid = 'STREETDIR' and value = :staddrdirsfx",
            "cardinality": null
        },
        {
            "name": "TIMEZONE",
            "source": "TKSERVICEADDRESS",
            "remarks": "Time Zone domain value for Service Address",
            "whereClause": "domainid = 'TIMEZONE' and value = :timezone",
            "cardinality": null
        },
        {
            "name": "STATUSDESC",
            "source": "TKTEMPLATE",
            "remarks": "Relationship to synonymdomain table, used to find description for the status, it will contain one object.",
            "whereClause": "domainid='TEMPLATESTATUS' and value=:status and :&DOMAINFILTER&_STATUS",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "STATUSDESC",
            "source": "WARRANTYVIEW",
            "remarks": "Relationship to synonymdomain table, used to find description for the status, it will contain one object.",
            "whereClause": "domainid='CONTRACTSTATUS' and value=:status and :&DOMAINFILTER&_STATUS",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "STATUSDESC",
            "source": "WOACTIVITY",
            "remarks": "Relationship to SYNONYMDOMAIN.",
            "whereClause": "domainid='WOSTATUS' and value=:status and :&DOMAINFILTER&_STATUS",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "STATUSDESC",
            "source": "WOCHANGESTATUS",
            "remarks": "Relationship to synonymdomain table, used to find description for the status, it will contain one object.",
            "whereClause": "domainid='WOSTATUS' and value=:wostatus and :&DOMAINFILTER&_STATUS",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "STADDRDIRPRFX",
            "source": "WOSERVICEADDRESS",
            "remarks": "Street Direction Prefix domain value for Service Address",
            "whereClause": "domainid = 'STREETDIR' and value = :staddrdirprfx",
            "cardinality": null
        },
        {
            "name": "STADDRDIRSFX",
            "source": "WOSERVICEADDRESS",
            "remarks": "Street Direction Suffix domain value for Service Address",
            "whereClause": "domainid = 'STREETDIR' and value = :staddrdirsfx",
            "cardinality": null
        },
        {
            "name": "TIMEZONE",
            "source": "WOSERVICEADDRESS",
            "remarks": "Time Zone domain value for Service Address",
            "whereClause": "domainid = 'TIMEZONE' and value = :timezone",
            "cardinality": null
        }
    ]
}