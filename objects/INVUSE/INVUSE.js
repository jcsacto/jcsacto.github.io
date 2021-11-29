mos = {
    "objectName": "INVUSE",
    "className": "psdi.app.inventory.InvUseSet",
    "description": "The Inventory Usage Document Table.",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "INVUSEID",
    "primaryKeyColumns": [
        "INVUSENUM",
        "SITEID"
    ],
    "logicalRelationships": [
        {
            "objectName": "INVUSE",
            "targetObject": "INVUSELINE",
            "parentKeys": "INVUSENUM, SITEID",
            "targetKeys": "INVUSENUM, POSITEID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 1",
            "longDescription": null
        },
        {
            "objectName": "INVUSE",
            "targetObject": "INVUSELINE",
            "parentKeys": "INVUSENUM, SITEID",
            "targetKeys": "INVUSENUM, PRSITEID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 2",
            "longDescription": null
        },
        {
            "objectName": "INVUSE",
            "targetObject": "INVUSELINE",
            "parentKeys": "INVUSENUM, SITEID",
            "targetKeys": "INVUSENUM, SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Inventory Use Lines",
            "longDescription": null
        },
        {
            "objectName": "INVUSE",
            "targetObject": "INVUSELINE",
            "parentKeys": "INVUSENUM, SITEID",
            "targetKeys": "INVUSENUM, TOSITEID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 4",
            "longDescription": null
        },
        {
            "objectName": "INVUSE",
            "targetObject": "INVUSELINESPLIT",
            "parentKeys": "INVUSENUM, SITEID",
            "targetKeys": "INVUSENUM, SITEID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 5",
            "longDescription": null
        },
        {
            "objectName": "INVUSE",
            "targetObject": "INVUSESTATUS",
            "parentKeys": "INVUSENUM, SITEID",
            "targetKeys": "INVUSENUM, SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Inventory Use History",
            "longDescription": null
        },
        {
            "objectName": "INVUSE",
            "targetObject": "SHIPMENT",
            "parentKeys": "INVUSENUM, SITEID",
            "targetKeys": "INVUSENUM, FROMSITEID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 7",
            "longDescription": null
        },
        {
            "objectName": "INVUSE",
            "targetObject": "SHIPMENT",
            "parentKeys": "INVUSENUM, SITEID",
            "targetKeys": "INVUSENUM, SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Inventory Usage",
            "longDescription": null
        }
    ],
    "targetLogicalRelationships": [
        {
            "objectName": "CURRENCY",
            "targetObject": "INVUSE",
            "parentKeys": "CURRENCYCODE",
            "targetKeys": "CURRENCYCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Currency used on InvUse record.",
            "longDescription": null
        },
        {
            "objectName": "LANGUAGE",
            "targetObject": "INVUSE",
            "parentKeys": "MAXLANGCODE",
            "targetKeys": "LANGCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Language for the record",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "INVUSE",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "SITEID, FROMSTORELOC",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Storeroom from where items come",
            "longDescription": null
        },
        {
            "objectName": "ORGANIZATION",
            "targetObject": "INVUSE",
            "parentKeys": "ORGID",
            "targetKeys": "ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Organization for the record",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "INVUSE",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who last changed the record.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "INVUSE",
            "parentKeys": "PERSONID",
            "targetKeys": "INVOWNER",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Inventory Owner",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "INVUSE",
            "parentKeys": "PERSONID",
            "targetKeys": "SHIPTOATTN",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Ship To Attention",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "INVUSE",
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
            "attributeName": "INVUSENUM",
            "required": true,
            "persistent": true,
            "title": "Usage",
            "remarks": "The number associated with the inventory usage.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "INVOWNER",
            "required": false,
            "persistent": true,
            "title": "Inventory Owner",
            "remarks": "The person responsible for the inventory.",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "USETYPE",
            "required": true,
            "persistent": true,
            "title": "Usage Type",
            "remarks": "The type of usage that is contained in the record. The value in this field is filled based on the usage line types entered for the record. By default, the field is set to MIXED.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "STATUS",
            "required": true,
            "persistent": true,
            "title": "Status",
            "remarks": "The status of the inventory usage record.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "FROMSTORELOC",
            "required": true,
            "persistent": true,
            "title": "From Location",
            "remarks": "The storeroom where the item is stocked. The storeroom information defaults from the user profile, which also contains information about the site and organization.",
            "sameAsAttribute": "LOCATION",
            "sameAsObject": "LOCATIONS"
        },
        {
            "attributeName": "CHANGEBY",
            "required": true,
            "persistent": true,
            "title": "Changed By",
            "remarks": "The person who last changed the record.",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "CHANGEDATE",
            "required": true,
            "persistent": true,
            "title": "Changed Date",
            "remarks": "The date the record was last changed.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ORGID",
            "required": true,
            "persistent": true,
            "title": "Organization",
            "remarks": "The organization associated with the inventory.",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION"
        },
        {
            "attributeName": "SITEID",
            "required": true,
            "persistent": true,
            "title": "Site",
            "remarks": "The site of the organization associated with the inventory. The site information comes from the default insert site in the user's profile, which also contains information about the organization and storeroom.",
            "sameAsAttribute": "SITEID",
            "sameAsObject": "SITE"
        },
        {
            "attributeName": "DESCRIPTION",
            "required": false,
            "persistent": true,
            "title": "Description",
            "remarks": "Describes the item. To enter more information, click the Long Description push button.",
            "sameAsAttribute": "DESCRIPTION",
            "sameAsObject": "ITEM"
        },
        {
            "attributeName": "AUTOSPLIT",
            "required": true,
            "persistent": false,
            "title": "AUTOSPLIT",
            "remarks": "Autosplit the use line records across multiple bins/lots.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "STATUSIFACE",
            "required": true,
            "persistent": true,
            "title": "Status Changed",
            "remarks": "Indicates whether the status has changed. This is used by the application to drive other business rules.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "STATUSDATE",
            "required": true,
            "persistent": true,
            "title": "Status Change Date",
            "remarks": "The date the status was last changed.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "NP_STATUSMEMO",
            "required": false,
            "persistent": false,
            "title": "Change Status Memo",
            "remarks": "Status change memo, temporary non-persistent field used by MEA.",
            "sameAsAttribute": "MEMO",
            "sameAsObject": "WFTRANSACTION"
        },
        {
            "attributeName": "SENDERSYSID",
            "required": false,
            "persistent": true,
            "title": "Sender System ID",
            "remarks": "Column used by ERP-Integration (APIs).",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "STAGINGBIN",
            "required": false,
            "persistent": false,
            "title": "Staging Bin",
            "remarks": "Staging Bin",
            "sameAsAttribute": "BINNUM",
            "sameAsObject": "INVENTORY"
        },
        {
            "attributeName": "BINFLAG",
            "required": false,
            "persistent": false,
            "title": "Bin Flag",
            "remarks": "Bin Flag",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "RESVPREF",
            "required": true,
            "persistent": false,
            "title": "Reservation User Preference",
            "remarks": "Reservation User Preference?",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "RETURNPREF",
            "required": true,
            "persistent": false,
            "title": "Return User Preference",
            "remarks": "Return User Preference",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SHOWAGAINPREF",
            "required": true,
            "persistent": false,
            "title": "Do not show this again",
            "remarks": "Do not show this again",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "AUTOCREATED",
            "required": true,
            "persistent": true,
            "title": "Auto Created",
            "remarks": "Indicates whether the Inventory Usage document is automatically created as a result of WorkOrder/PO/MR approval.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "RECEIPTS",
            "required": false,
            "persistent": true,
            "title": "Receipts",
            "remarks": "The receipt status of the inventory usage record. The receipt status applies only to inventory records that have been shipped.",
            "sameAsAttribute": "RECEIPTS",
            "sameAsObject": "PO"
        },
        {
            "attributeName": "SHIPMENTDATE",
            "required": false,
            "persistent": true,
            "title": "Shipment Date",
            "remarks": "The date the items were shipped. The shipment date is set when you commence the shipping process by changing the status of the inventory record to SHIPPED.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SHIPTOATTN",
            "required": false,
            "persistent": true,
            "title": "Attention of",
            "remarks": "The person to whom the inventory items are being shipped.",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "SHIPMENTNUM",
            "required": false,
            "persistent": false,
            "title": "Shipment",
            "remarks": "The shipment document reference number provided by supplier.",
            "sameAsAttribute": "SHIPMENTNUM",
            "sameAsObject": "SHIPMENT"
        },
        {
            "attributeName": "EXPRECEIPTDATE",
            "required": false,
            "persistent": false,
            "title": "Shipmentnum",
            "remarks": "The expected date for the items to be received.",
            "sameAsAttribute": "EXPRECEIPTDATE",
            "sameAsObject": "SHIPMENT"
        },
        {
            "attributeName": "CARRIER",
            "required": false,
            "persistent": false,
            "title": "Shipmentnum",
            "remarks": "The transportation agency that is responsible for delivering the shipment.",
            "sameAsAttribute": "CARRIER",
            "sameAsObject": "SHIPMENT"
        },
        {
            "attributeName": "PACKINGSLIPNUM",
            "required": false,
            "persistent": false,
            "title": "Shipmentnum",
            "remarks": "The packing slip number for the shipment.",
            "sameAsAttribute": "PACKINGSLIPNUM",
            "sameAsObject": "SHIPMENT"
        },
        {
            "attributeName": "CURRENCYCODE",
            "required": false,
            "persistent": true,
            "title": "Currency",
            "remarks": "Identifies the currency inventory usage is in.",
            "sameAsAttribute": "CURRENCYCODE",
            "sameAsObject": "CURRENCY"
        },
        {
            "attributeName": "EXCHANGEDATE",
            "required": false,
            "persistent": true,
            "title": "Exchange Date",
            "remarks": "Date of the exchange rate.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "EXCHANGERATE",
            "required": false,
            "persistent": true,
            "title": "Exchange Rate",
            "remarks": "Exchange rate at time of inventory usage shipped.",
            "sameAsAttribute": "EXCHANGERATE",
            "sameAsObject": "EXCHANGE"
        },
        {
            "attributeName": "EXCHANGERATE2",
            "required": false,
            "persistent": true,
            "title": "Secondary Exchange Rate",
            "remarks": "Exchange Rate 2.",
            "sameAsAttribute": "EXCHANGERATE",
            "sameAsObject": "EXCHANGE"
        },
        {
            "attributeName": "INVUSEID",
            "required": true,
            "persistent": true,
            "title": "Unique Id",
            "remarks": "Unique Id",
            "sameAsAttribute": null,
            "sameAsObject": null
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
            "attributeName": "INVUSENUM_LONGDESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Usage Long description",
            "remarks": "Long Description for Usage",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DESCRIPTION_LONGDESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Description Long description",
            "remarks": "Long Description for Description",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LANGCODE",
            "required": true,
            "persistent": true,
            "title": "Language Code",
            "remarks": "Language Code",
            "sameAsAttribute": "MAXLANGCODE",
            "sameAsObject": "LANGUAGE"
        },
        {
            "attributeName": "WORKORDERID",
            "required": false,
            "persistent": true,
            "title": "Work Order Id",
            "remarks": "work order identifier",
            "sameAsAttribute": "WORKORDERID",
            "sameAsObject": "WORKORDER"
        }
    ],
    "outgoingRelationships": [
        {
            "name": "DOCLINKS",
            "target": "DOCLINKS",
            "remarks": "Relationship to the InvUse''s DocLinks records, used to find documents for a given InvUse. The resulting set will contain zero or one record.",
            "whereClause": "ownertable='INVUSE' and ownerid=:invuseid",
            "cardinality": null
        },
        {
            "name": "INVBALANCESOUT",
            "target": "INVBALANCES",
            "remarks": "Relationship to the InvBalances table. The resulting set will contain zero or more objects.",
            "whereClause": "location=:fromstoreloc and siteid=:siteid",
            "cardinality": null
        },
        {
            "name": "INVRESERVE",
            "target": "INVRESERVE",
            "remarks": "Relationship to the InvReserve table, used to find inventory reservations for material transfers out of a given storeroom location.The resulting set will contain zero or more objects.",
            "whereClause": "location=:fromstoreloc and storelocsiteid=:siteid",
            "cardinality": null
        },
        {
            "name": "INVRESERVEPARTIALSHIP",
            "target": "INVRESERVE",
            "remarks": "Relationship from invuse to invreserve table, used to find the invreserve records  that still hold partial shipments of inventory usage documents. The resulting set will contain zero or more objects.",
            "whereClause": "location=:fromstoreloc and storelocsiteid=:siteid and ponum is not null and polinenum is not null and porevisionnum is not null and tostoreloc is not null and shippedqty >0 and (reservedqty - pendingqty - stagedqty - shippedqty) > 0  and  (requestnum in (select requestnum from invuseline where invuseline.invusenum=:invusenum and invuseline.requestnum=invreserve.requestnum and invuseline.requestnum is not null)   or   ponum in (select ponum from invuseline where invuseline.invusenum=:invusenum and invuseline.ponum=invreserve.ponum and invuseline.ponum is not null  and invuseline.polinenum=invreserve.polinenum and invuseline.porevisionnum = invreserve.porevisionnum and invuseline.tostoreloc=invreserve.tostoreloc))",
            "cardinality": null
        },
        {
            "name": "INVRESERVEUNISSUED",
            "target": "INVRESERVE",
            "remarks": "Relationship from invuse to invreserve table, used to find the invreserve records for the partial/un-issued items. The resulting set will contain zero or more objects.",
            "whereClause": "location=:fromstoreloc and storelocsiteid=:siteid and ponum is null and polinenum is null and tostoreloc is null and (reservedqty - pendingqty - stagedqty - shippedqty) > 0  and  (requestnum in (select requestnum from invuseline where invuseline.invusenum=:invusenum and invuseline.requestnum=invreserve.requestnum and invuseline.requestnum is not null)   or   wonum in (select refwo from invuseline where invuseline.invusenum=:invusenum and invuseline.refwo=invreserve.wonum and invuseline.refwo is not null)   or   mrnum in (select mrnum from invuseline where invuseline.invusenum=:invusenum and invuseline.mrnum=invreserve.mrnum and invuseline.mrnum is not null))",
            "cardinality": null
        },
        {
            "name": "INVUSECHANGESTATUS",
            "target": "INVUSECHANGESTATUS",
            "remarks": "Relationship to the non-persistent INVUSECHANGESTATUS table for changing status. (No where clause).",
            "whereClause": null,
            "cardinality": null
        },
        {
            "name": "INVUSELINE",
            "target": "INVUSELINE",
            "remarks": "Relationship to the InvUseLine table, used to find the invuseline information for an inventory usage number. The resulting set will contain zero or more objects.",
            "whereClause": "invusenum=:invusenum and siteid=:siteid",
            "cardinality": "MULTIPLE"
        },
        {
            "name": "SPLITINVUSELINE",
            "target": "INVUSELINE",
            "remarks": "Relationship to the InvUseLineSplit table, used to find invuseline records that needs splitting.",
            "whereClause": "invusenum=:invusenum and siteid=:siteid and usetype not in (select value from synonymdomain where domainid = 'INVUSETYPE' and maxvalue in ('RETURN') ) and not exists (select 1 from invuselinesplit where invuselineid=invuseline.invuselineid) and (exists(select 1 from item where itemnum=invuseline.itemnum and rotating=:YES and invuseline.rotassetnum is null) or ( exists (select 1 from invbalances where itemnum=invuseline.itemnum and itemsetid=invuseline.itemsetid and location=invuseline.fromstoreloc and siteid =invuseline.siteid and (conditioncode is null or conditioncode=invuseline.fromconditioncode) and ( binnum is null or binnum=invuseline.frombin) and curbal < invuseline.quantity)))",
            "cardinality": null
        },
        {
            "name": "INVUSELINESPLIT",
            "target": "INVUSELINESPLIT",
            "remarks": "Relationship to the InvUseLineSplit table. The resulting set will contain one or more objects.",
            "whereClause": "invusenum=:invusenum and siteid=:siteid and autocreated=0",
            "cardinality": null
        },
        {
            "name": "INVUSESTATUS",
            "target": "INVUSESTATUS",
            "remarks": "Relationship to the InvUseStatus table, used to find the InvUse record for given invuse number. This relationship will find one or more objects.",
            "whereClause": "invusenum=:invusenum and siteid=:siteid",
            "cardinality": null
        },
        {
            "name": "LOCATIONS",
            "target": "LOCATIONS",
            "remarks": "Relationship to the Locations table, used to find the location information for inventory usage. The resulting set will contain zero or one object.",
            "whereClause": "location=:fromstoreloc and siteid=:siteid",
            "cardinality": null
        },
        {
            "name": "MATRECTRANS",
            "target": "MATRECTRANS",
            "remarks": "Relationship to the InvUse table, used to find all inventory TRANSFER transactions.",
            "whereClause": "issuetype in ( select value from synonymdomain where domainid ='ISSUETYP' and maxvalue in ('TRANSFER', 'STAGETRANSFER', 'SHIPTRANSFER','SHIPCANCEL', 'SHIPRECEIPT', 'SHIPRETURN', 'VOIDSHIPRECEIPT'))  and invuseid=:invuseid",
            "cardinality": null
        },
        {
            "name": "MATUSETRANS",
            "target": "MATUSETRANS",
            "remarks": "Relationship to the InvUse table, used to find all inventory ISSUE/RETURN transactions.",
            "whereClause": "issuetype in ( select value from synonymdomain where domainid ='ISSUETYP' and maxvalue in ('ISSUE', 'RETURN')) and invuseid=:invuseid",
            "cardinality": null
        },
        {
            "name": "MATUSETRANSRETURN",
            "target": "MATUSETRANS",
            "remarks": "Relationship to the MatUseTrans table, used to find the existing material issue transactions which can be returned to a given storeroom location.The resulting set will contain zero or more objects. This relationship is primarily used for the Select Items for Returns action on the Inventory Usage tab of the Inventory Usage application.",
            "whereClause": "storeloc = :fromstoreloc and quantity < 0 and issueid is null and (qtyreturned is null OR qtyreturned < quantity * -1) and issuetype in (select value from synonymdomain where domainid='ISSUETYP' and maxvalue NOT IN ('KITBREAK','KITMAKE') ) and siteid=:siteid and (rotassetnum is null or (rotassetnum is not null and rotassetnum in (select assetnum from asset where siteid=matusetrans.tositeid and location=matusetrans.location))) and (refwo is null or (refwo is not null and refwo in (select wonum from workorder where status in (select value  from synonymdomain where domainid='WOSTATUS' and value not in ('CLOSE', 'CAN'))) ))",
            "cardinality": null
        },
        {
            "name": "SHIPMENT",
            "target": "SHIPMENT",
            "remarks": "Relationship to the Shipment table, used to find the invuse record. The resulting set will contain zero or one object.",
            "whereClause": "invusenum=:invusenum and fromsiteid=:siteid",
            "cardinality": null
        },
        {
            "name": "INVUSESPAREPART",
            "target": "SPAREPART",
            "remarks": "Relationship to the sparepart records, used to find the sparepart records for a given storeroom.",
            "whereClause": "itemnum in (select itemnum from invbalances where location = :fromstoreloc and siteid=:siteid) and siteid=:siteid",
            "cardinality": null
        },
        {
            "name": "SPLITUSELINE",
            "target": "SPLITUSELINE",
            "remarks": "Relationship to the SplitInvUseLine. The resulting set will contain zero or more objects.",
            "whereClause": "invusenum=:invusenum and siteid=:siteid",
            "cardinality": null
        },
        {
            "name": "USERPREF",
            "target": "USERPREF",
            "remarks": "Relationship to the USERPREF table, used to find USERPREF records. The resulting set will contain zero or one object.",
            "whereClause": null,
            "cardinality": null
        }
    ],
    "incomingRelationships": [
        {
            "name": "INVUSE",
            "source": "INVRESERVE",
            "remarks": "Relationship to the InvUse table, used to find inventory usage for material transfers out of a given storeroom location.The resulting set will contain zero or more objects.",
            "whereClause": "fromstoreloc=:location and siteid=:storelocsiteid",
            "cardinality": null
        },
        {
            "name": "INVUSE",
            "source": "INVUSELINE",
            "remarks": "Relationship to the InvUse table, used to find the invuseline information for an invusenum. The resulting set will contain zero or more objects.",
            "whereClause": "invusenum=:invusenum and siteid=:siteid",
            "cardinality": null
        },
        {
            "name": "INVUSE",
            "source": "MATRECTRANS",
            "remarks": "Relationship to the InvUse table, used to find the invuse records for a transfer. The resulting set will contain zero or more objects.",
            "whereClause": "fromstoreloc=:fromstoreloc and siteid=:siteid",
            "cardinality": null
        },
        {
            "name": "SINGLEINVUSE",
            "source": "MATRECTRANS",
            "remarks": "Relationship to the InvUse table, used to find the invuse records for a transfer. The resulting set will contain zero or more objects.",
            "whereClause": "invuseid = :invuseid",
            "cardinality": null
        },
        {
            "name": "INVUSE",
            "source": "MATUSETRANS",
            "remarks": "Relationship to the InvUse table, used to find the invuse records for an issue. The resulting set will contain zero or more objects.",
            "whereClause": "fromstoreloc=:storeloc and siteid=:siteid",
            "cardinality": null
        },
        {
            "name": "INVUSE",
            "source": "PO",
            "remarks": "Relationship to the INVUSE table, used to find the invuse records for a given invuseline. The resulting set will contain one object.",
            "whereClause": "fromstoreloc=:storeloc and siteid=:siteid",
            "cardinality": null
        },
        {
            "name": "INVUSE",
            "source": "SHIPMENT",
            "remarks": "Relationship between the Shipment table and the Invuse table.  Used to find all INVUSE records for a given shipment.  This will return 0 or 1 record.",
            "whereClause": "invusenum = :invusenum and siteid = :fromsiteid",
            "cardinality": null
        }
    ]
}