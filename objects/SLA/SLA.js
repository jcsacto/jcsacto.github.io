mos = {
    "objectName": "SLA",
    "className": "psdi.app.sla.SLASet",
    "description": "Service Level Agreements",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": true,
    "uniqueId": "SLAID",
    "primaryKeyColumns": [
        "SLANUM"
    ],
    "logicalRelationships": [
        {
            "objectName": "SLA",
            "targetObject": "ESCALATION",
            "parentKeys": "SLANUM",
            "targetKeys": "SLANUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Escalation related to the SLA",
            "longDescription": null
        },
        {
            "objectName": "SLA",
            "targetObject": "RELATEDSLA",
            "parentKeys": "SLANUM",
            "targetKeys": "CHILDSLANUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Supporting SLA''s",
            "longDescription": null
        },
        {
            "objectName": "SLA",
            "targetObject": "RELATEDSLA",
            "parentKeys": "SLANUM",
            "targetKeys": "PARENTSLANUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "SLA Supported",
            "longDescription": null
        },
        {
            "objectName": "SLA",
            "targetObject": "SLAASSETLOC",
            "parentKeys": "SLANUM",
            "targetKeys": "SLANUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "SLA that has the relationships to the Locations and Assets",
            "longDescription": null
        },
        {
            "objectName": "SLA",
            "targetObject": "SLACOMMITMENTS",
            "parentKeys": "SLANUM",
            "targetKeys": "SLANUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "SLA Commitments",
            "longDescription": null
        },
        {
            "objectName": "SLA",
            "targetObject": "SLACONTRACT",
            "parentKeys": "SLANUM",
            "targetKeys": "SLANUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Link to Contracts",
            "longDescription": null
        },
        {
            "objectName": "SLA",
            "targetObject": "SLAKPI",
            "parentKeys": "SLANUM",
            "targetKeys": "SLANUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Link to KPI",
            "longDescription": null
        },
        {
            "objectName": "SLA",
            "targetObject": "SLARECORDS",
            "parentKeys": "SLANUM",
            "targetKeys": "SLANUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Other records this SLA was applied to.",
            "longDescription": null
        }
    ],
    "targetLogicalRelationships": [
        {
            "objectName": "CALENDAR",
            "targetObject": "SLA",
            "parentKeys": "ORGID, CALNUM",
            "targetKeys": "CALCORGID, CALCCALENDAR",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Calendar used to calculate target date.",
            "longDescription": null
        },
        {
            "objectName": "CALENDAR",
            "targetObject": "SLA",
            "parentKeys": "ORGID, CALNUM",
            "targetKeys": "CALCORGID, SLACALENDAR",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 21",
            "longDescription": null
        },
        {
            "objectName": "CALENDAR",
            "targetObject": "SLA",
            "parentKeys": "ORGID, CALNUM",
            "targetKeys": "ORGID, CALCCALENDAR",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 22",
            "longDescription": null
        },
        {
            "objectName": "CALENDAR",
            "targetObject": "SLA",
            "parentKeys": "ORGID, CALNUM",
            "targetKeys": "ORGID, SLACALENDAR",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 23",
            "longDescription": null
        },
        {
            "objectName": "CALENDAR",
            "targetObject": "SLA",
            "parentKeys": "ORGID, CALNUM",
            "targetKeys": "SLAORGID, CALCCALENDAR",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 24",
            "longDescription": null
        },
        {
            "objectName": "CALENDAR",
            "targetObject": "SLA",
            "parentKeys": "ORGID, CALNUM",
            "targetKeys": "SLAORGID, SLACALENDAR",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "SLA''s Calendar",
            "longDescription": null
        },
        {
            "objectName": "CLASSSTRUCTURE",
            "targetObject": "SLA",
            "parentKeys": "CLASSSTRUCTUREID",
            "targetKeys": "CLASSSTRUCTUREID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "SLA Class Structure",
            "longDescription": null
        },
        {
            "objectName": "COMPANIES",
            "targetObject": "SLA",
            "parentKeys": "ORGID, COMPANY",
            "targetKeys": "CALCORGID, VENDOR",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 75",
            "longDescription": null
        },
        {
            "objectName": "COMPANIES",
            "targetObject": "SLA",
            "parentKeys": "ORGID, COMPANY",
            "targetKeys": "ORGID, VENDOR",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Vendor of SLA",
            "longDescription": null
        },
        {
            "objectName": "COMPANIES",
            "targetObject": "SLA",
            "parentKeys": "ORGID, COMPANY",
            "targetKeys": "SLAORGID, VENDOR",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 77",
            "longDescription": null
        },
        {
            "objectName": "ESCALATION",
            "targetObject": "SLA",
            "parentKeys": "ESCALATION",
            "targetKeys": "ESCALATION",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 5",
            "longDescription": null
        },
        {
            "objectName": "LANGUAGE",
            "targetObject": "SLA",
            "parentKeys": "MAXLANGCODE",
            "targetKeys": "LANGCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Language for the record",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "SLA",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "OBJECTNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Type of Object this SLA applies to.",
            "longDescription": null
        },
        {
            "objectName": "ORGANIZATION",
            "targetObject": "SLA",
            "parentKeys": "ORGID",
            "targetKeys": "CALCORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 287",
            "longDescription": null
        },
        {
            "objectName": "ORGANIZATION",
            "targetObject": "SLA",
            "parentKeys": "ORGID",
            "targetKeys": "ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Organization for the record",
            "longDescription": null
        },
        {
            "objectName": "ORGANIZATION",
            "targetObject": "SLA",
            "parentKeys": "ORGID",
            "targetKeys": "SLAORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "SLA''s Organization",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "SLA",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who last changed the record.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "SLA",
            "parentKeys": "PERSONID",
            "targetKeys": "CREATEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who created the record.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "SLA",
            "parentKeys": "PERSONID",
            "targetKeys": "CUSTVENDORCONTACT",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Primary contact person of Customer/Vendor",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "SLA",
            "parentKeys": "PERSONID",
            "targetKeys": "SLACONTACT",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "SLA Administrator",
            "longDescription": null
        },
        {
            "objectName": "SHIFT",
            "targetObject": "SLA",
            "parentKeys": "ORGID, SHIFTNUM",
            "targetKeys": "CALCORGID, CALCSHIFT",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Shift used to calculate target date",
            "longDescription": null
        },
        {
            "objectName": "SHIFT",
            "targetObject": "SLA",
            "parentKeys": "ORGID, SHIFTNUM",
            "targetKeys": "CALCORGID, SLASHIFT",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 19",
            "longDescription": null
        },
        {
            "objectName": "SHIFT",
            "targetObject": "SLA",
            "parentKeys": "ORGID, SHIFTNUM",
            "targetKeys": "ORGID, CALCSHIFT",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 20",
            "longDescription": null
        },
        {
            "objectName": "SHIFT",
            "targetObject": "SLA",
            "parentKeys": "ORGID, SHIFTNUM",
            "targetKeys": "ORGID, SLASHIFT",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 21",
            "longDescription": null
        },
        {
            "objectName": "SHIFT",
            "targetObject": "SLA",
            "parentKeys": "ORGID, SHIFTNUM",
            "targetKeys": "SLAORGID, CALCSHIFT",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 22",
            "longDescription": null
        },
        {
            "objectName": "SHIFT",
            "targetObject": "SLA",
            "parentKeys": "ORGID, SHIFTNUM",
            "targetKeys": "SLAORGID, SLASHIFT",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Shift Hours SLA is valid.",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "SLA",
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
            "attributeName": "SLANUM",
            "required": true,
            "persistent": true,
            "title": "SLA",
            "remarks": "Identifies the service level agreement (SLA) record. This value must be unique for all SLA records.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SLATYPE",
            "required": true,
            "persistent": true,
            "title": "Type",
            "remarks": "Category of service level agreement. Types include customer, internal, and vendor. Click the Select Value button to choose an SLA type.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "OBJECTNAME",
            "required": true,
            "persistent": true,
            "title": "Applies To",
            "remarks": "Maximo business object to which this service level agreement applies. Some examples include INCIDENT, SR, and CHANGE. Click the Select Value button to choose an object.",
            "sameAsAttribute": "OBJECTNAME",
            "sameAsObject": "MAXOBJECT"
        },
        {
            "attributeName": "DESCRIPTION",
            "required": false,
            "persistent": true,
            "title": "Description",
            "remarks": "Describes the service level agreement (SLA). To enter or view additional information, click the Long Description button.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "STATUS",
            "required": true,
            "persistent": true,
            "title": "Status",
            "remarks": "Status of the service level agreement. Values include DRAFT, ACTIVE, and INACTIVE. Only SLAs that you mark as ACTIVE can be applied by other Maximo user to a record. Click the Select Value button to choose a status.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "STATUSDATE",
            "required": false,
            "persistent": true,
            "title": "Status Date",
            "remarks": "Calendar day and time that the SLA status was last changed.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "STARTDATE",
            "required": false,
            "persistent": true,
            "title": "Start Date",
            "remarks": "Calendar day and time that this service level agreement becomes valid. Click the Select Date and Time button to choose a day and time.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ENDDATE",
            "required": false,
            "persistent": true,
            "title": "End Date",
            "remarks": "Last calendar day and time that this service level agreement is valid. Click the Select Date and Time button to choose a day and time.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "REVIEWDATE",
            "required": false,
            "persistent": true,
            "title": "Review Date",
            "remarks": "Calendar day and time that the service level agreement is up for review. Click the Select Date and Time button to choose a day and time.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "RANKING",
            "required": false,
            "persistent": true,
            "title": "Ranking",
            "remarks": "Numerical value that determines which single SLA Maximo should apply to a record or the order in which Maximo should apply multiple SLAs if more than one SLA can be applied a record. A system administration configures whether one or multiple SLAs can be applied to a record, and whether to use rank or stringency to apply them. When you rank an SLA, the lowest number has the highest rank. The highest possible rank is one (1).",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "COMMODITYGROUP",
            "required": false,
            "persistent": true,
            "title": "Service Group",
            "remarks": "Category of services, for example, IT or FLEET. Click Select Value to choose a service group.",
            "sameAsAttribute": "COMMODITY",
            "sameAsObject": "COMMODITIES"
        },
        {
            "attributeName": "COMMODITY",
            "required": false,
            "persistent": true,
            "title": "Service",
            "remarks": "Set of tasks provided by a service provider that fulfills one or more needs of a customer. Services must be associated with a service group. Click the Select Value button to choose a service.",
            "sameAsAttribute": "COMMODITY",
            "sameAsObject": "COMMODITIES"
        },
        {
            "attributeName": "ORGID",
            "required": false,
            "persistent": true,
            "title": "Organization",
            "remarks": "Organization to which the service level agreement (SLA) applies. If you do not specify an organization or site, the SLA will be applicable system-wide. Click the Select Value button to choose an organization.",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION"
        },
        {
            "attributeName": "SITEID",
            "required": false,
            "persistent": true,
            "title": "Site",
            "remarks": "Site to which the service level agreement (SLA) applies. If you do not specify an organization or site, the SLA will be applicable system-wide. Click the Select Value button to choose a site.",
            "sameAsAttribute": "SITEID",
            "sameAsObject": "SITE"
        },
        {
            "attributeName": "VENDOR",
            "required": false,
            "persistent": true,
            "title": "Vendor",
            "remarks": "Company associated with the service level agreement. Maximo defaults a value in the Organization field based on your selection. Click the Select Value button to choose a vendor company.",
            "sameAsAttribute": "COMPANY",
            "sameAsObject": "COMPANIES"
        },
        {
            "attributeName": "SLACALENDAR",
            "required": false,
            "persistent": true,
            "title": "Calendar",
            "remarks": "Business days and times for which the service level agreement (SLA) is valid. Used to determine whether the SLA is applicable to a record. Click the Detail Menu to select a calendar or go to the Calendars application to create one.",
            "sameAsAttribute": "CALNUM",
            "sameAsObject": "CALENDAR"
        },
        {
            "attributeName": "CREATEBY",
            "required": false,
            "persistent": true,
            "title": "Created By",
            "remarks": "Create By",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "CREATEDATE",
            "required": false,
            "persistent": true,
            "title": "Created Date",
            "remarks": "Date the SLA was created",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CHANGEBY",
            "required": true,
            "persistent": true,
            "title": "Changed By",
            "remarks": "Last user to change the SLA",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "CHANGEDATE",
            "required": false,
            "persistent": true,
            "title": "Changed Date",
            "remarks": "Date the SLA was last changed",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ESCALATION",
            "required": false,
            "persistent": true,
            "title": "Escalation",
            "remarks": "Escalation",
            "sameAsAttribute": "ESCALATION",
            "sameAsObject": "ESCALATION"
        },
        {
            "attributeName": "DESCRIPTION_LONGDESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Details",
            "remarks": "Long description for description",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CONDITION",
            "required": false,
            "persistent": true,
            "title": "Condition Code",
            "remarks": "Additional SQL condition used to further refine the criteria for applying an SLA to a record.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CONTACTTIME",
            "required": false,
            "persistent": false,
            "title": "Contact",
            "remarks": "Contact",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "RESPONSETIME",
            "required": false,
            "persistent": false,
            "title": "Response",
            "remarks": "Response",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "RESOLUTIONTIME",
            "required": false,
            "persistent": false,
            "title": "Resolution",
            "remarks": "Resolution",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SLAID",
            "required": true,
            "persistent": true,
            "title": "SLAID",
            "remarks": "Unique Identifier",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SLASHIFT",
            "required": false,
            "persistent": true,
            "title": "Shift",
            "remarks": "Along with the Calendar, sets the business hours for which the service level agreement (SLA) is valid. Click the Select Value button to choose a shift.",
            "sameAsAttribute": "SHIFTNUM",
            "sameAsObject": "SHIFT"
        },
        {
            "attributeName": "SLAORGID",
            "required": false,
            "persistent": true,
            "title": "Organization",
            "remarks": "Organization for the Applies To Calendar, which sets the applicable business days, hours, and shift for records to which this SLA is applied. Click the Detail Menu button to select an organization or go to the Organizations application to create one.",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION"
        },
        {
            "attributeName": "CALCCALENDAR",
            "required": false,
            "persistent": true,
            "title": "Calendar",
            "remarks": "Business days and times used to calculate the Target Contact, Target Response, and Target Resolution dates on a ticket or work order. Click the Detail Menu to select a calendar or go to the Calendars application to create one.",
            "sameAsAttribute": "CALNUM",
            "sameAsObject": "CALENDAR"
        },
        {
            "attributeName": "CALCSHIFT",
            "required": false,
            "persistent": true,
            "title": "Shift",
            "remarks": "Along with the calculation calendar, sets the business hours that calculate the Target Contact, Target Response, and Target Resolution dates on a ticket or work order. Click the Select Value button to choose a shift.",
            "sameAsAttribute": "SHIFTNUM",
            "sameAsObject": "SHIFT"
        },
        {
            "attributeName": "CALCORGID",
            "required": false,
            "persistent": true,
            "title": "Organization",
            "remarks": "Organization associated with the calculation calendar, and used with the Calendar and Shift fields to calculate the Target Contact, Target Response, and Target Resolution dates on a ticket or work order. Click the Detail Menu button to select an organization or go to the Organizations application to create one.",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION"
        },
        {
            "attributeName": "EXPOBJECT",
            "required": false,
            "persistent": false,
            "title": "Exp Object",
            "remarks": "Exp Object",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SLACONTACT",
            "required": false,
            "persistent": true,
            "title": "SLA Administrator",
            "remarks": "Peson responsible for administering the service level agreement (SLA). Click the Select Value button to choose an administrator.",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "NP_STATUSMEMO",
            "required": false,
            "persistent": false,
            "title": "Change Status Memo",
            "remarks": "Status change memo, temporary non-persistent field used by MEA",
            "sameAsAttribute": "MEMO",
            "sameAsObject": "WFTRANSACTION"
        },
        {
            "attributeName": "LANGCODE",
            "required": true,
            "persistent": true,
            "title": "Language Code",
            "remarks": "Language Column",
            "sameAsAttribute": "MAXLANGCODE",
            "sameAsObject": "LANGUAGE"
        },
        {
            "attributeName": "CUSTVENDORCONTACT",
            "required": false,
            "persistent": true,
            "title": "Customer/Vendor Contact",
            "remarks": "Primary contact person if the service level agreement is of type CUSTOMER or VENDOR. Click the Select Value button to choose a contact person or go the People application to create one.",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "CLASSSTRUCTUREID",
            "required": false,
            "persistent": true,
            "title": "Target Record Classification",
            "remarks": "Target Record Classification",
            "sameAsAttribute": "CLASSSTRUCTUREID",
            "sameAsObject": "CLASSSTRUCTURE"
        },
        {
            "attributeName": "HASLD",
            "required": true,
            "persistent": true,
            "title": "Has Long Description",
            "remarks": "Boolean flag to indicate if there is any long description for this record",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "STATUSIFACE",
            "required": true,
            "persistent": false,
            "title": "Has Status Changed",
            "remarks": "Non persistent boolean field to indicate whether the status has been changed after the stateful object is fetched from the database.",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "BOOKMARK",
            "target": "BOOKMARK",
            "remarks": "Relationship to the BOOKMARK table, used to find all bookmarks for a SLA. ( bookmark.app= 'SLA' and bookmark.keyvalue = SLA.SLAID). This resulting set will contain zero or more objects.",
            "whereClause": "app='SLA' and keyvalue=:slaid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CLASSANCESTOR",
            "target": "CLASSANCESTOR",
            "remarks": "Relationship to the classancestor table, used to find the ancestor records for a given classstructure. (sla.classstructureid = classancestor.classstructureid). The resulting set will contain zero or more objects.",
            "whereClause": "classstructureid=:classstructureid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CLASSSTRUCTURE",
            "target": "CLASSSTRUCTURE",
            "remarks": "Relationship for classstructure",
            "whereClause": "classstructureid = :classstructureid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "COMMODITY",
            "target": "COMMODITIES",
            "remarks": "Relationship to the commodity table, used to find the parent record for the commodity. (sla.commodity = commodities.commodity). The resulting set will contain one objects.",
            "whereClause": "commodity = :commodity",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DOCLINKS",
            "target": "DOCLINKS",
            "remarks": "Relationsip to the doclink table",
            "whereClause": "ownertable = 'SLA' and ownerid = :slaid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DRILLDOWN",
            "target": "DRILLDOWN",
            "remarks": "SLA to Drilldown relation",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ESCALATION",
            "target": "ESCALATION",
            "remarks": "SLA to Escalation relation",
            "whereClause": "escalation = :escalation",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "EXPBUILDER",
            "target": "EXPBUILDER",
            "remarks": "SLA to EXPBUILDER relation",
            "whereClause": "1=1",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CUSTVENDORCONTACT",
            "target": "PERSON",
            "remarks": "Relationship for customer/vendor contact",
            "whereClause": "personid = :custvendorcontact",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SLACONTACT",
            "target": "PERSON",
            "remarks": "Relationship for slacontact",
            "whereClause": "personid = :slacontact",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "RELATEDSLACHILD",
            "target": "RELATEDSLA",
            "remarks": "Relationship to the RelatedSLA table, used to find the RelatedSLA records a given SLA supports. (sla.slanum = relatedsla.childslanum). The resulting set will contain zero more objects.",
            "whereClause": "parentslanum = :slanum",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "RELATEDSLAPARENT",
            "target": "RELATEDSLA",
            "remarks": "Relationship to the RelatedSLA table, used to find the RelatedSLA records supported by a given SLA. (sla.slanum =  relatedsla.parentslanum). The resulting set will contain zero or more objects.",
            "whereClause": "childslanum = :slanum",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SLALIST",
            "target": "SLA",
            "remarks": "Relationship to the SLA table, used to find the SLA records, which are note taken. The resulting set will contain zero or more objects.",
            "whereClause": "slanum != :slanum and slanum not in (select childslanum from relatedsla where parentslanum = :slanum) and slanum not in (select parentslanum from relatedsla where childslanum = :slanum)",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SLAASSETLOC",
            "target": "SLAASSETLOC",
            "remarks": "Relationship to the SLAAssetLoc table, used to find the SLAAssetLoc records for a given SLA. (sla.slanum = slaassetloc.slanum). The resulting set will contain 0 or more objects.",
            "whereClause": "slanum = :slanum",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SLAASSETLOCASSET",
            "target": "SLAASSETLOC",
            "remarks": "Relationship to the SLAAssetLoc table, used to find the SLAAssetLoc asset records for a given SLA. (sla.slanum = slaassetloc.slanum and assetnum is not null). The resulting set will contain 1 or more objects.",
            "whereClause": "slanum = :slanum and assetnum is not null",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SLAASSETLOCASSETLOC",
            "target": "SLAASSETLOC",
            "remarks": "SLA to SLAASSETLOC table relation, for assets or locations",
            "whereClause": "slanum = :slanum and (assetnum  is not null or location is not null)",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SLAASSETLOCLOCATION",
            "target": "SLAASSETLOC",
            "remarks": "Relationship to the SLAAssetLoc table, used to find the SLAAssetLoc location records for a given SLA. (sla.slanum = slaassetloc.slanum and location is not null). The resulting set will contain 1 or more objects.",
            "whereClause": "slanum = :slanum and location is not null",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SLAASSETLOCTYPE",
            "target": "SLAASSETLOC",
            "remarks": "Relationship to the SLAAssetLoc table, used to find the SLAAssetLoc assettype records for a given SLA. (sla.slanum = slaassetloc.slanum and assettype is not null). The resulting set will contain 1 or more objects.",
            "whereClause": "slanum = :slanum and assettype is not null",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SLACHANGESTATUS",
            "target": "SLACHANGESTATUS",
            "remarks": "Relationship to the non-persistent SLAChangeStatus table. The resulting set will contain zero or more objects. Note : SLAChangeStatus is a non-persistent MBO with whose help the dialog box binds with the object.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SLACOMMITMENTS",
            "target": "SLACOMMITMENTS",
            "remarks": "Relationship to the SLACommitments table, used to find the SLACommitments for a given SLA. (sla.slanum = slacommitments.slanum). The resulting set will contain 1 or more objects.",
            "whereClause": "slanum = :slanum",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CONTRACTRECORDS",
            "target": "SLACONTRACT",
            "remarks": "Relationship to slacontract, used to bridge to the contracts asscoiated with an sla",
            "whereClause": "slanum = :slanum",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SLADUMMYSTATUS",
            "target": "SLADUMMYSTATUS",
            "remarks": "SLA to SLADUMMYSTATUS relationship",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SLAKPI",
            "target": "SLAKPI",
            "remarks": "Define sla to slakpi relationship",
            "whereClause": "slanum = :slanum",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SLARECORDS",
            "target": "SLARECORDS",
            "remarks": "Relationship to the SLARecords table, used to find the SLARecords for a given SLA. (sla.slanum = slarecords.slanum). The resulting set will contain zero or more objects.",
            "whereClause": "slanum = :slanum",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "STATUSDESC",
            "target": "SYNONYMDOMAIN",
            "remarks": "Relationship to synonymdomain table, used to find description for the status, it will contain one object.",
            "whereClause": "domainid='SLASTATUS' and value=:status and :&DOMAINFILTER&_STATUS",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "COMMSLA",
            "source": "AREASAFFECTED",
            "remarks": null,
            "whereClause": "commodity=:affectedcommodity",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SLA",
            "source": "CLASSSTRUCTURE",
            "remarks": "Relationship to the sla table, used to find the sla records for a given classstructure. (classstructure.classstructureid = sla.classstructureid). The resulting set will contain zero or more objects.",
            "whereClause": "classstructureid=:classstructureid ",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "COMMSLA",
            "source": "COMMODITIES",
            "remarks": null,
            "whereClause": "commodity = :commodity",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "COMMSLAGRP",
            "source": "COMMODITIES",
            "remarks": null,
            "whereClause": "commoditygroup = :commodity",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SLA",
            "source": "LABORVIEW",
            "remarks": "Relationship to the SLA table, used to find all slas in a status of active. (sla.status=ACTIVE). The resulting set will contain zero or more objects.",
            "whereClause": "orgid=:orgid and status in (select value from synonymdomain where domainid='SLASTATUS' and maxvalue ='ACTIVE')",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SLA",
            "source": "LEASEVIEW",
            "remarks": "Relationship to the SLA table, used to find all slas in a status of active. (sla.status=ACTIVE). The resulting set will contain zero or more objects.",
            "whereClause": "orgid=:orgid and status in (select value from synonymdomain where domainid='SLASTATUS'and maxvalue ='ACTIVE')",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SLA",
            "source": "LOCATIONS",
            "remarks": "Relationship to the SLA table, used to find the active SLAs for the location. The resulting set will contain one or more objects.",
            "whereClause": "sla.slanum in (select slanum from slaassetloc where slaassetloc.location=:location ) and sla.status in (select value from synonymdomain where domainid='SLASTATUS' and maxvalue ='ACTIVE')",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SLA",
            "source": "MASTERVIEW",
            "remarks": "Relationship to the SLA table, used to find all slas in a status of active. (sla.status=ACTIVE). The resulting set will contain zero or more objects.",
            "whereClause": "orgid=:orgid and status in (select value from synonymdomain where domainid='SLASTATUS' and maxvalue ='ACTIVE')",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SLA",
            "source": "PURCHVIEW",
            "remarks": "Relationship to the SLA table, used to find all slas in a status of active. (sla.status=ACTIVE). The resulting set will contain zero or more objects.",
            "whereClause": "orgid=:orgid and status in (select value from synonymdomain where domainid='SLASTATUS' and maxvalue ='ACTIVE')",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PARENTSLA",
            "source": "RELATEDSLA",
            "remarks": "Relationship to the SLA table, used to find the SLA records a given RelatedSLA. (relatedsla.parentslanum = sla.slanum).",
            "whereClause": "slanum = :parentslanum",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CHILDSLA",
            "source": "RELATEDSLA",
            "remarks": "Relationship to the SLA table, used to find the SLA records a given RelatedSLA. (relatedsla.childslanum = sla.slanum).",
            "whereClause": "slanum = :childslanum",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SLA",
            "source": "SFWVIEW",
            "remarks": "Relationship to the SLA table, used to find all slas in a status of active. (sla.status=ACTIVE). The resulting set will contain zero or more objects.",
            "whereClause": "orgid=:orgid and status in (select value from synonymdomain where domainid='SLASTATUS'and maxvalue ='ACTIVE')",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SLALIST",
            "source": "SLA",
            "remarks": "Relationship to the SLA table, used to find the SLA records, which are note taken. The resulting set will contain zero or more objects.",
            "whereClause": "slanum != :slanum and slanum not in (select childslanum from relatedsla where parentslanum = :slanum) and slanum not in (select parentslanum from relatedsla where childslanum = :slanum)",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SLA",
            "source": "SLACONTRACT",
            "remarks": "Relationship to the SLA table, used to find all slas for a given sla contract. (slacontract.slanum = sla.slanum). The resulting set will contain zero or one object.",
            "whereClause": "slanum=:slanum",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SLA",
            "source": "SLARECORDS",
            "remarks": "Relationship to sla.",
            "whereClause": "slanum = :slanum",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "COMMSLA",
            "source": "TICKET",
            "remarks": null,
            "whereClause": "commodity=:commodity",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "COMMSLAGRP",
            "source": "TICKET",
            "remarks": null,
            "whereClause": "commoditygroup=:commoditygroup",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "COMMSLA",
            "source": "TKTEMPLATE",
            "remarks": null,
            "whereClause": "commodity=:commodity",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "COMMSLAGRP",
            "source": "TKTEMPLATE",
            "remarks": null,
            "whereClause": "commoditygroup=:commoditygroup",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SLA",
            "source": "WARRANTYVIEW",
            "remarks": "Relationship to the SLA table, used to find all slas in a status of active. (sla.status=ACTIVE). The resulting set will contain zero or more objects.",
            "whereClause": "orgid=:orgid and status in (select value from synonymdomain where domainid ='SLASTATUS' and maxvalue ='ACTIVE')",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "COMMSLA",
            "source": "WORKORDER",
            "remarks": null,
            "whereClause": "commodity=:commodity",
            "cardinality": "SINGLE"
        },
        {
            "name": "COMMSLAGRP",
            "source": "WORKORDER",
            "remarks": null,
            "whereClause": "commoditygroup=:commoditygroup",
            "cardinality": "UNDEFINED"
        }
    ]
}