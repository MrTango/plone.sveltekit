# -*- coding: utf-8 -*-
from plone.app.robotframework.testing import REMOTE_LIBRARY_BUNDLE_FIXTURE
from plone.app.testing import (
    PLONE_FIXTURE,
    FunctionalTesting,
    IntegrationTesting,
    PloneSandboxLayer,
    applyProfile,
)
from plone.testing import z2

import plone.sveltekit


class PloneSveltekitLayer(PloneSandboxLayer):

    defaultBases = (PLONE_FIXTURE,)

    def setUpZope(self, app, configurationContext):
        # Load any other ZCML that is required for your tests.
        # The z3c.autoinclude feature is disabled in the Plone fixture base
        # layer.
        import plone.app.dexterity

        self.loadZCML(package=plone.app.dexterity)
        import plone.restapi

        self.loadZCML(package=plone.restapi)
        self.loadZCML(package=plone.sveltekit)

    def setUpPloneSite(self, portal):
        applyProfile(portal, "plone.sveltekit:default")


PLONE_SVELTEKIT_FIXTURE = PloneSveltekitLayer()


PLONE_SVELTEKIT_INTEGRATION_TESTING = IntegrationTesting(
    bases=(PLONE_SVELTEKIT_FIXTURE,),
    name="PloneSveltekitLayer:IntegrationTesting",
)


PLONE_SVELTEKIT_FUNCTIONAL_TESTING = FunctionalTesting(
    bases=(PLONE_SVELTEKIT_FIXTURE,),
    name="PloneSveltekitLayer:FunctionalTesting",
)


PLONE_SVELTEKIT_ACCEPTANCE_TESTING = FunctionalTesting(
    bases=(
        PLONE_SVELTEKIT_FIXTURE,
        REMOTE_LIBRARY_BUNDLE_FIXTURE,
        z2.ZSERVER_FIXTURE,
    ),
    name="PloneSveltekitLayer:AcceptanceTesting",
)
